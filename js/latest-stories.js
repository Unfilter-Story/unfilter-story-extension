/* js/latest-stories.js — home page "Latest Stories" sidebar.
   Mixes external news items with our own published articles:
   pattern = 2 news → 2 articles → 2 news → 2 articles (up to 8 total). */

import { API_BASE } from './api.js';

function esc(v) {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeCategory(item) {
  try {
    const arr = JSON.parse(item.categories || '[]');
    return (Array.isArray(arr) ? arr[0] : null) || item.source || 'News';
  } catch {
    return item.source || 'News';
  }
}

function renderStoryItem(item, number, isNews) {
  const href = isNews
    ? esc(item.link || '#')
    : `article.html?id=${esc(item.slug || '')}`;
  const title = esc(item.title || item.headline || '');
  const tag = isNews
    ? esc(safeCategory(item))
    : esc(item.category?.name || 'Story');
  const isLast = number === 4;
  const target = isNews ? ' target="_blank" rel="noopener noreferrer"' : '';

  return `
    <article class="card-trending"${isLast ? ' style="border-bottom: none; padding-bottom: 0;"' : ''}>
      <div class="trending-number">${String(number).padStart(2, '0')}</div>
      <div>
        <span class="card-tag" style="font-size: 0.7rem; padding: 2px 6px; margin-bottom: 4px; display: inline-block;">${tag}</span>
        <h3 class="card-title" style="font-size: 1.05rem; line-height: 1.3;">
          <a href="${href}"${target}>${title}</a>
        </h3>
      </div>
    </article>
  `;
}

export async function initLatestStories() {
  const container = document.getElementById('latest-stories-items');
  if (!container) return;

  try {
    const [newsRes, articlesRes] = await Promise.all([
      fetch(`${API_BASE}/v1/news-items`, { headers: { Accept: 'application/json' } }),
      fetch(`${API_BASE}/v1/articles`, { headers: { Accept: 'application/json' } }),
    ]);

    const news = newsRes.ok ? await newsRes.json() : [];
    const articles = articlesRes.ok ? await articlesRes.json() : [];

    if (!news.length && !articles.length) return;

    // Build mixed list: 2 news, 2 articles, repeat until 8
    const mixed = [];
    let ni = 0;
    let ai = 0;
    while (mixed.length < 8 && (ni < news.length || ai < articles.length)) {
      for (let i = 0; i < 2 && ni < news.length && mixed.length < 8; i++, ni++) {
        mixed.push({ item: news[ni], isNews: true });
      }
      for (let i = 0; i < 2 && ai < articles.length && mixed.length < 8; i++, ai++) {
        mixed.push({ item: articles[ai], isNews: false });
      }
    }

    if (mixed.length === 0) return;

    container.innerHTML = mixed.map(({ item, isNews }, idx) =>
      renderStoryItem(item, idx + 1, isNews)
    ).join('');

  } catch (err) {
    console.error('Failed to load latest stories:', err);
  }
}
