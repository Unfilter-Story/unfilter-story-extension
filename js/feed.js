/* d:\unfilterstory\js\feed.js */

const mockArticles = [
  {
    tag: 'SaaS',
    title: 'Why Usage-Based Pricing is the Future of B2B Software',
    excerpt: 'Analyzing the shift from seat-based subscriptions to pure utility billing models.',
    author: 'Elena Rodriguez',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    tag: 'Hardware',
    title: 'The Resurgence of Silicon Valley Hardware Startups',
    excerpt: 'How new manufacturing techniques and supply chain resilience are fueling a hardware renaissance.',
    author: 'David Chen',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    tag: 'Web3',
    title: 'DeFi Protocols Seeing Institutional Adoption in 2026',
    excerpt: 'Traditional finance is finally bridging the gap with decentralized liquidity pools.',
    author: 'Marcus Reid',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export function initDynamicFeed() {
  const loadMoreBtn = document.getElementById('load-more-articles');
  const feedContainer = document.getElementById('articles-feed-container');

  if (!loadMoreBtn || !feedContainer) return;

  let loadedOnce = false;

  loadMoreBtn.addEventListener('click', () => {
    if (loadedOnce) {
      window.location.href = 'stories.html';
      return;
    }

    // Disable button and show loading state
    loadMoreBtn.innerText = 'Loading...';
    loadMoreBtn.disabled = true;

    // Simulate network delay
    setTimeout(() => {
      const fragment = document.createDocumentFragment();

      mockArticles.forEach(article => {
        const articleHTML = `
          <div class="card-article-img hero-media-wrapper" style="background-image: url('${article.image}'); background-size: cover; background-position: center;"></div>
          <div class="card-article-content">
            <span class="card-tag">${article.tag}</span>
            <h3 class="card-title"><a href="#">${article.title}</a></h3>
            <p class="card-excerpt">${article.excerpt}</p>
            <div class="card-meta">
              <div class="author-meta">
                <div class="author-avatar" style="background-image: url('${article.avatar}'); background-size: cover; background-position: center;"></div>
                <span>${article.author}</span>
              </div>
              <div style="display: flex; gap: var(--spacing-4); align-items: center;">
                <span>${article.readTime}</span>
                <a href="#" style="font-weight: 600; color: var(--color-accent); font-size: 0.875rem;">View Details &rarr;</a>
              </div>
            </div>
          </div>
        `;
        
        const articleElement = document.createElement('article');
        articleElement.className = 'card-article-horizontal';
        // Add a slight delay for staggered animation if desired, or just use transition
        articleElement.style.opacity = '0';
        articleElement.style.transform = 'translateY(10px)';
        articleElement.innerHTML = articleHTML;
        
        fragment.appendChild(articleElement);
      });

      feedContainer.appendChild(fragment);

      // Trigger reflow and animate in
      const newElements = feedContainer.querySelectorAll('.card-article-horizontal[style*="opacity: 0"]');
      newElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.transition = 'opacity var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 100); // 100ms stagger
      });

      // Change button state to act as a navigation link
      loadedOnce = true;
      loadMoreBtn.innerText = 'View All Articles \u2192';
      loadMoreBtn.disabled = false;
    }, 800); // 800ms mock delay
  });
}
