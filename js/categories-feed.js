/* js/categories-feed.js — home page "Explore by Category" section.
   Fetches one published article per category and renders image cards. */

import { API_BASE } from './api.js';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80';

function esc(v) {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCategoryCard(article) {
  const slug = article.a_slug || article.slug || '';
  const href = slug ? `article.html?id=${esc(slug)}` : '#';
  const image = esc(article.featured_image_url || article.featuredImageUrl || FALLBACK_IMAGE);
  const tag = esc(article.category_name || 'Insights');
  const title = esc(article.headline || '');
  const excerpt = article.sub_headline || '';
  const author = [article.first_name, article.last_name].filter(Boolean).join(' ') || 'Unfilter Story';

  return `
    <article class="card-article" style="display: flex; flex-direction: column; border-radius: 12px; overflow: hidden; border: 1px solid var(--color-border); background: var(--color-bg-surf); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
      <a href="${href}" style="display: block; aspect-ratio: 16/10; overflow: hidden;">
        <div style="width: 100%; height: 100%; background-image: url('${image}'); background-size: cover; background-position: center; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''"></div>
      </a>
      <div class="card-article-content" style="padding: var(--spacing-4); flex: 1; display: flex; flex-direction: column;">
        <span class="card-tag" style="margin-bottom: var(--spacing-2);">${tag}</span>
        <h3 class="card-title" style="font-size: 1.05rem; line-height: 1.4; margin-bottom: var(--spacing-2); flex: 1;">
          <a href="${href}" style="color: inherit; text-decoration: none;">${title}</a>
        </h3>
        ${excerpt ? `<p style="font-size: 0.85rem; color: var(--color-text-mute); margin-bottom: var(--spacing-2); line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${esc(excerpt)}</p>` : ''}
        <div style="font-size: 0.8rem; color: var(--color-text-mute); margin-top: auto;">${esc(author)}</div>
      </div>
    </article>
  `;
}

export async function initCategoriesFeed() {
  const container = document.getElementById('categories-feed-container');
  if (!container) return;

  try {
    const res = await fetch(`${API_BASE}/v1/categories-articles`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return;
    const articles = await res.json();
    if (!Array.isArray(articles) || articles.length === 0) return;

    container.innerHTML = articles.map(renderCategoryCard).join('');
  } catch (err) {
    console.error('Failed to load category articles:', err);
  }
}
