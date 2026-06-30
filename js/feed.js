/* js/feed.js — homepage "Latest Articles" feed.
   Shows hot-topic-linked articles first, then remaining published articles.
   Falls back to static cards if the API is unreachable. */

import { fetchArticleCards, API_BASE } from './api.js';

const PAGE_SIZE = 4;

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCard(card) {
  const href = esc(card.href || '#');
  const el = document.createElement('article');
  el.className = 'card-article-horizontal';
  el.style.opacity = '0';
  el.style.transform = 'translateY(10px)';
  el.innerHTML = `
    <div class="card-article-img hero-media-wrapper" style="background-image: url('${esc(card.image)}'); background-size: cover; background-position: center;"></div>
    <div class="card-article-content">
      <span class="card-tag">${esc(card.tag)}</span>
      <h3 class="card-title"><a href="${href}">${esc(card.title)}</a></h3>
      <p class="card-excerpt">${esc(card.excerpt)}</p>
      <div class="card-meta">
        <div class="author-meta">
          <div class="author-avatar" style="background-image: url('${esc(card.avatar)}'); background-size: cover; background-position: center;"></div>
          <span>${esc(card.author)}</span>
        </div>
        <div style="display: flex; gap: var(--spacing-4); align-items: center;">
          <span>${esc(card.readTime)}</span>
          <a href="${href}" style="font-weight: 600; color: var(--color-accent); font-size: 0.875rem;">View Details &rarr;</a>
        </div>
      </div>
    </div>
  `;
  return el;
}

function appendCards(container, cards) {
  const fragment = document.createDocumentFragment();
  const elements = cards.map((card) => {
    const el = renderCard(card);
    fragment.appendChild(el);
    return el;
  });
  container.appendChild(fragment);
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = 'opacity var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

async function fetchHotTopicSlugs() {
  try {
    const res = await fetch(`${API_BASE}/v1/hot-topics`, { headers: { Accept: 'application/json' } });
    if (!res.ok) return new Set();
    const rows = await res.json();
    return new Set(
      rows
        .filter((r) => r.article_slug)
        .map((r) => r.article_slug)
    );
  } catch {
    return new Set();
  }
}

export async function initDynamicFeed() {
  const loadMoreBtn = document.getElementById('load-more-articles');
  const feedContainer = document.getElementById('articles-feed-container');

  if (!feedContainer) return;

  let allCards = [];
  try {
    const [cards, hotSlugs] = await Promise.all([
      fetchArticleCards(),
      fetchHotTopicSlugs(),
    ]);

    // Hot-topic articles first, then the rest
    const hot = cards.filter((c) => hotSlugs.has(c.slug));
    const rest = cards.filter((c) => !hotSlugs.has(c.slug));
    allCards = [...hot, ...rest];
  } catch (error) {
    console.error('Failed to load articles from API; showing static fallback.', error);
    return;
  }

  if (!allCards.length) return;

  feedContainer.innerHTML = '';

  let shown = 0;
  const showNext = () => {
    appendCards(feedContainer, allCards.slice(shown, shown + PAGE_SIZE));
    shown += PAGE_SIZE;
  };
  showNext();

  if (!loadMoreBtn) return;

  const syncButton = () => {
    if (shown >= allCards.length) {
      loadMoreBtn.innerText = 'View All Articles →';
    }
  };
  syncButton();

  loadMoreBtn.addEventListener('click', () => {
    if (shown >= allCards.length) {
      window.location.href = 'articles.html';
      return;
    }
    showNext();
    syncButton();
  });
}
