// articles-router.js
// Client-side state machine and deep-linking pushState router for articles.html.
// Wired to the live API: renders published articles from GET /v1/articles. The
// hardcoded list below is kept only as an offline fallback if the API is down.

import { fetchArticleCards } from './api.js';

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
  const taxonomyPills = document.querySelectorAll('.taxonomy-pill');
  
  if (!gridContainer || !taxonomyPills.length) return;

  // Generate Skeleton HTML
  const generateSkeleton = () => {
    return Array(3).fill(0).map(() => `
      <div class="flex flex-col bg-white dark:bg-[#0D121F] rounded-[18px] border border-gray-200 dark:border-gray-800 overflow-hidden animate-pulse">
        <div class="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800"></div>
        <div class="p-6 flex flex-col flex-1 space-y-4">
          <div class="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
          <div class="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-2"></div>
          <div class="space-y-2 flex-1">
            <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
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
  };

  // Initialize router
  const initRouter = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'All';
    updateActiveState(category);
    renderGridWithAnimation(category, true);
  };

  // Handle Pill Clicks
  taxonomyPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      let category = pill.getAttribute('data-category');
      
      // If clicking already active pill, reset to 'All'
      if (pill.classList.contains('active-pill')) {
        category = 'All';
      }

      // Update URL without refresh
      const newUrl = category === 'All' 
        ? window.location.pathname 
        : `${window.location.pathname}?category=${category}`;
      
      window.history.pushState({ category }, "", newUrl);
      
      updateActiveState(category);
      renderGridWithAnimation(category);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const category = e.state?.category || 'All';
    updateActiveState(category);
    renderGridWithAnimation(category);
  });

  function updateActiveState(activeCategory) {
    taxonomyPills.forEach(pill => {
      const pillCat = pill.getAttribute('data-category');
      if (pillCat === activeCategory) {
        pill.className = 'taxonomy-pill active-pill px-4 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:scale-105 transition-transform shadow-md';
      } else {
        pill.className = 'taxonomy-pill inactive-pill px-4 py-1.5 rounded-full border border-gray-200 dark:border-slate-border text-gray-600 dark:text-gray-300 hover:border-brand-red hover:text-brand-red transition-colors font-medium text-sm';
      }
    });
  }

  function renderGridWithAnimation(category, isInitialLoad = false) {
    gridContainer.style.opacity = '0';
    gridContainer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      // Inject Skeleton UI First to prevent CLS
      gridContainer.innerHTML = generateSkeleton();
      gridContainer.style.opacity = '1';
      gridContainer.style.transform = 'translateY(0)';
      
      // Artificial slight delay to show the skeleton processing (UX feeling)
      setTimeout(() => {
        renderGrid(category);
      }, isInitialLoad ? 0 : 300);
      
    }, 200);
  }

  function renderGrid(category) {
    const filteredData = category === 'All' 
      ? articlesData 
      : articlesData.filter(item => item.category === category);

    if (filteredData.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-gray-500">
          <p>No articles found for #${escHtml(category)}. Check back soon!</p>
        </div>
      `;
      return;
    }

    const html = filteredData.map(article => `
      <a href="${escHtml(article.link)}" class="group flex flex-col bg-white dark:bg-[#0D121F] rounded-[18px] border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] hover:border-brand-red/30 transition-all duration-300">
        <div class="w-full aspect-[4/3] overflow-hidden relative bg-gray-100 dark:bg-gray-900">
          <img src="${escHtml(article.image)}" alt="${escHtml(article.badge)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-4 left-4 px-2 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold font-mono uppercase tracking-widest rounded">${escHtml(article.badge)}</div>
        </div>
        <div class="p-6 flex flex-col flex-1 space-y-3">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors line-clamp-2" style="font-size: 1.25rem; line-height: 1.4;">${escHtml(article.title)}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">${escHtml(article.excerpt)}</p>
          <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img src="${escHtml(article.authorImg)}" alt="Author" class="w-6 h-6 rounded-full">
              <span class="text-xs font-bold text-gray-500">${escHtml(article.author)}</span>
            </div>
            <span class="text-xs font-bold text-brand-red flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
          </div>
        </div>
      </a>
    `).join('');

    // Force fade out before swapping actual content
    gridContainer.style.opacity = '0';
    setTimeout(() => {
      gridContainer.innerHTML = html;
      gridContainer.style.opacity = '1';
      
      // Re-initialize lucide icons
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 150);
  }

  gridContainer.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

  // Load published articles from the API; fall back to the static list on failure.
  try {
    const cards = await fetchArticleCards();
    if (Array.isArray(cards) && cards.length) {
      articlesData = cards.map(cardToArticle);
    }
  } catch (err) {
    console.error('Failed to load articles from API; using static fallback.', err);
  }

  // Call initialization logic
  initRouter();
});
