// articles-router.js
// Client-side state machine and deep-linking pushState router for articles.html.
// Category pills are loaded from /cms/v1/categories; selecting one filters via
// /v1/articles/search?category=. Falls back to static list if API is unavailable.

import { fetchArticleCards, toCard, API_BASE } from './api.js';

function escHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Map an API card (from js/api.js) to the shape this grid renderer expects.
function cardToArticle(card) {
  return {
    id: card.slug,
    category: card.tag || 'All',
    badge: card.tag || 'Article',
    title: card.title,
    excerpt: card.excerpt,
    image: card.image,
    author: card.author,
    authorImg: card.avatar,
    link: card.href || 'article.html',
  };
}

let articlesData = [
  {
    id: 'art-1',
    category: 'AI',
    badge: 'FINTECH AI',
    title: 'The Next Generation of Autonomous Architectures',
    excerpt: 'How agentic AI systems are completely rewriting the infrastructure of global payments and bypassing traditional regulatory hurdles in 2026.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Lin',
    authorImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=50&h=50&q=80',
    link: 'article.html'
  },
  {
    id: 'art-2',
    category: 'Funding',
    badge: 'VENTURE CAPITAL',
    title: 'The $100M Seed Round: A New Era of Funding',
    excerpt: 'How sovereign wealth and mega-funds are bypassing traditional Series A/B rounds to dominate the cap tables of generational startups.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    author: 'Marcus Vance',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50&q=80',
    link: '100m-seed-round.html'
  },
  {
    id: 'art-3',
    category: 'SaaS',
    badge: 'UI/UX DESIGN',
    title: 'Beyond Dark Mode: The Neo-Brutalism Resurgence',
    excerpt: 'A deep dive into why enterprise SaaS platforms are dropping soft shadows for high-contrast, structural boundaries.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    author: 'Elena Rostova',
    authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50&q=80',
    link: 'neo-brutalism-resurgence.html'
  },
  {
    id: 'art-4',
    category: 'Startups',
    badge: 'ECOSYSTEM',
    title: 'The Rise of Micro-SaaS Empires',
    excerpt: 'Solo founders are building highly profitable niche software businesses that compete with VC-backed giants.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    author: 'David Chen',
    authorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50&q=80',
    link: 'article.html'
  },
  {
    id: 'art-5',
    category: 'FounderStories',
    badge: 'LEADERSHIP',
    title: 'From Burnout to Breakthrough',
    excerpt: 'A candid interview with three founders on navigating the emotional toll of scaling a hyper-growth startup.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    author: 'Jessica Alva',
    authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&h=50&q=80',
    link: 'article.html'
  },
  {
    id: 'art-6',
    category: 'Innovation',
    badge: 'HARDWARE',
    title: 'The Great Re-Platforming',
    excerpt: 'Hardware is making a massive comeback as compute demands outstrip SaaS capacity in the enterprise tech ecosystem.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. Alan Vance',
    authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50&h=50&q=80',
    link: 'article.html'
  }
];

document.addEventListener('DOMContentLoaded', async () => {
  const gridContainer = document.getElementById('articles-grid');
  const pillsRow = document.getElementById('category-pills-row');

  if (!gridContainer || !pillsRow) return;

  gridContainer.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

  // --- Skeletons ---
  const generateSkeleton = () => Array(6).fill(0).map(() => `
    <div class="flex flex-col bg-white dark:bg-[#0D121F] rounded-[18px] border border-gray-200 dark:border-gray-800 overflow-hidden animate-pulse">
      <div class="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800"></div>
      <div class="p-6 flex flex-col flex-1 space-y-4">
        <div class="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div class="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        <div class="space-y-2 flex-1">
          <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
        </div>
        <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800"></div>
            <div class="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
          <div class="h-4 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>
      </div>
    </div>
  `).join('');

  // --- Fetch categories from CMS and inject pills ---
  async function loadCategoryPills() {
    try {
      const res = await fetch(`${API_BASE}/cms/v1/categories`);
      if (!res.ok) return;
      const categories = await res.json();
      if (!Array.isArray(categories) || !categories.length) return;

      const pillHtml = categories.map(cat => `
        <a href="#" class="taxonomy-pill px-4 py-1.5 rounded-full border border-gray-200 dark:border-slate-border text-gray-600 dark:text-gray-300 hover:border-brand-red hover:text-brand-red transition-colors font-medium text-sm whitespace-nowrap" data-category="${escHtml(cat.name)}">${escHtml(cat.name)}</a>
      `).join('');

      pillsRow.insertAdjacentHTML('beforeend', pillHtml);
    } catch (err) {
      console.error('Failed to load categories:', err);
    }

    bindPillClicks();
  }

  // --- Pill click binding (called after dynamic pills are injected) ---
  function bindPillClicks() {
    pillsRow.querySelectorAll('.taxonomy-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        let category = pill.getAttribute('data-category');
        if (pill.classList.contains('active-pill')) category = 'All';

        const newUrl = category === 'All'
          ? window.location.pathname
          : `${window.location.pathname}?category=${encodeURIComponent(category)}`;
        window.history.pushState({ category }, '', newUrl);

        updateActiveState(category);
        fetchAndRender(category);
      });
    });
  }

  // --- Active pill styling ---
  function updateActiveState(activeCategory) {
    pillsRow.querySelectorAll('.taxonomy-pill').forEach(pill => {
      const isActive = pill.getAttribute('data-category') === activeCategory;
      pill.className = isActive
        ? 'taxonomy-pill active-pill px-4 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:scale-105 transition-transform shadow-md whitespace-nowrap'
        : 'taxonomy-pill inactive-pill px-4 py-1.5 rounded-full border border-gray-200 dark:border-slate-border text-gray-600 dark:text-gray-300 hover:border-brand-red hover:text-brand-red transition-colors font-medium text-sm whitespace-nowrap';
    });
  }

  // --- Fetch articles (all or by category via search API) ---
  async function fetchArticles(category) {
    if (category === 'All') {
      const cards = await fetchArticleCards();
      return cards.map(c => ({ ...c, link: c.href, badge: c.tag }));
    }
    const params = new URLSearchParams({ category });
    const res = await fetch(`${API_BASE}/v1/articles/search?${params}`);
    if (!res.ok) throw new Error(`Search failed: ${res.status}`);
    const results = await res.json();
    return results.map(a => {
      const card = toCard(a);
      return { ...card, link: card.href, badge: card.tag };
    });
  }

  // --- Render grid from article data ---
  function renderGrid(articles) {
    if (!articles.length) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-gray-500">
          <p>No articles found in this category. Check back soon!</p>
        </div>
      `;
      gridContainer.style.opacity = '1';
      return;
    }

    const html = articles.map(article => `
      <a href="${escHtml(article.link)}" class="group flex flex-col bg-white dark:bg-[#0D121F] rounded-[18px] border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] hover:border-brand-red/30 transition-all duration-300">
        <div class="w-full aspect-[4/3] overflow-hidden relative bg-gray-100 dark:bg-gray-900">
          <img src="${escHtml(article.image)}" alt="${escHtml(article.badge)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-4 left-4 px-2 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold font-mono uppercase tracking-widest rounded">${escHtml(article.badge)}</div>
        </div>
        <div class="p-6 flex flex-col flex-1 space-y-3">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors line-clamp-2">${escHtml(article.title)}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">${escHtml(article.excerpt)}</p>
          <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img src="${escHtml(article.avatar)}" alt="Author" class="w-6 h-6 rounded-full">
              <span class="text-xs font-bold text-gray-500">${escHtml(article.author)}</span>
            </div>
            <span class="text-xs font-bold text-brand-red flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
          </div>
        </div>
      </a>
    `).join('');

    gridContainer.style.opacity = '0';
    setTimeout(() => {
      gridContainer.innerHTML = html;
      gridContainer.style.opacity = '1';
      if (window.lucide) window.lucide.createIcons();
    }, 150);
  }

  // --- Fetch + skeleton + render ---
  async function fetchAndRender(category) {
    gridContainer.style.opacity = '0';
    setTimeout(() => {
      gridContainer.innerHTML = generateSkeleton();
      gridContainer.style.opacity = '1';
    }, 200);

    try {
      const articles = await fetchArticles(category);
      renderGrid(articles);
    } catch (err) {
      console.error('Failed to load articles:', err);
      // Fall back to static data filtered by category
      const filtered = category === 'All'
        ? articlesData
        : articlesData.filter(a => a.category === category);
      renderGrid(filtered.map(a => ({ ...a, link: a.link, avatar: a.authorImg })));
    }
  }

  // --- Browser back/forward ---
  window.addEventListener('popstate', (e) => {
    const category = e.state?.category || 'All';
    updateActiveState(category);
    fetchAndRender(category);
  });

  // --- Bootstrap ---
  await loadCategoryPills();

  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'All';
  updateActiveState(initialCategory);
  fetchAndRender(initialCategory);
});
