/* d:\unfilterstory\js\feed.js */

const mockArticles = [
  {
    tag: 'SaaS',
    title: 'Why Usage-Based Pricing is the Future of B2B Software',
    excerpt: 'Analyzing the shift from seat-based subscriptions to pure utility billing models.',
    author: 'Elena Rodriguez',
    readTime: '6 min read'
  },
  {
    tag: 'Hardware',
    title: 'The Resurgence of Silicon Valley Hardware Startups',
    excerpt: 'How new manufacturing techniques and supply chain resilience are fueling a hardware renaissance.',
    author: 'David Chen',
    readTime: '8 min read'
  },
  {
    tag: 'Web3',
    title: 'DeFi Protocols Seeing Institutional Adoption in 2026',
    excerpt: 'Traditional finance is finally bridging the gap with decentralized liquidity pools.',
    author: 'Marcus Reid',
    readTime: '5 min read'
  }
];

export function initDynamicFeed() {
  const loadMoreBtn = document.getElementById('load-more-articles');
  const feedContainer = document.getElementById('articles-feed-container');

  if (!loadMoreBtn || !feedContainer) return;

  loadMoreBtn.addEventListener('click', () => {
    // Disable button and show loading state
    const originalText = loadMoreBtn.innerText;
    loadMoreBtn.innerText = 'Loading...';
    loadMoreBtn.disabled = true;

    // Simulate network delay
    setTimeout(() => {
      const fragment = document.createDocumentFragment();

      mockArticles.forEach(article => {
        const articleHTML = `
          <div class="card-article-img hero-media-wrapper"></div>
          <div class="card-article-content">
            <span class="card-tag">${article.tag}</span>
            <h2 class="card-title"><a href="#">${article.title}</a></h2>
            <p class="card-excerpt">${article.excerpt}</p>
            <div class="card-meta">
              <div class="author-meta">
                <div class="author-avatar"></div>
                <span>${article.author}</span>
              </div>
              <span>${article.readTime}</span>
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

      // Restore button state
      loadMoreBtn.innerText = originalText;
      loadMoreBtn.disabled = false;
      
    }, 800); // 800ms mock delay
  });
}
