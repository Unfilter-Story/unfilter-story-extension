/* d:\unfilterstory\js\components\AppHeader.js */

import { initTheme } from '../theme.js';

class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
    // Initialize theme toggle functionality after rendering
    initTheme();
  }

  render() {
    const currentPath = window.location.pathname;
    const isPage = (path) => currentPath.endsWith(path) ? 'aria-current="page"' : '';

    this.innerHTML = `
      <header class="app-header">
        <div class="header-inner">
          <a href="index.html" class="logo">
            <img src="images/new-logo.png" alt="UnfilterStory Logo" style="height: 60px; width: auto; object-fit: contain;">
          </a>

          <nav class="nav-desktop">
            <ul>
              <li><a href="index.html" ${isPage('index.html') || currentPath === '/' || currentPath.endsWith('/') ? 'aria-current="page"' : ''}>Home</a></li>
              <li><a href="news.html" ${isPage('news.html')} style="color:#6B7280; pointer-events:none; cursor:not-allowed;">News</a></li>
              <li><a href="articles.html" ${isPage('articles.html')}>Articles</a></li>
              <li><a href="interviews.html" ${isPage('interviews.html')} style="color:#6B7280; pointer-events:none; cursor:not-allowed;">Interviews</a></li>
              <li><a href="stories.html" ${isPage('stories.html')} style="color:#6B7280; pointer-events:none; cursor:not-allowed;">Startup Stories</a></li>
              <!-- 
              <li><a href="ai-innovation.html" ${isPage('ai-innovation.html')}>AI & Innovation</a></li>
              <li><a href="funding.html" ${isPage('funding.html')}>Funding</a></li> 
              -->

              <li class="dropdown">
                <a href="#" aria-haspopup="true" aria-expanded="false" style="display:flex; align-items:center; gap:4px;">
                  More 
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#">Guest Post</a></li>
                  <li><a href="feature.html" style="color: #DC2626; font-weight: 500;">Feature Your Story</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          <div class="header-actions">
            <button id="search-toggle" class="btn-icon" aria-label="Open Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <a href="newsletter.html" class="btn btn-primary">Subscribe</a>
          </div>
        </div>
      </header>

      <!-- Bottom Navigation Bar (Mobile Only) -->
      <nav class="mobile-bottom-nav" aria-label="Mobile Navigation">
        <a href="news.html" class="bottom-nav-item" style="opacity:0.4; pointer-events:none; cursor:not-allowed;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
          <span>News</span>
          <div class="active-indicator"></div>
        </a>
        <a href="articles.html" class="bottom-nav-item ${currentPath.endsWith('articles.html') ? 'active' : ''}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>Articles</span>
          <div class="active-indicator"></div>
        </a>
        <a href="interviews.html" class="bottom-nav-item" style="opacity:0.4; pointer-events:none; cursor:not-allowed;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
          <span>Interviews</span>
          <div class="active-indicator"></div>
        </a>
        <a href="stories.html" class="bottom-nav-item" style="opacity:0.4; pointer-events:none; cursor:not-allowed;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 22L10.5 22L12 18L13.5 22Z"></path><path d="M12 18L10 14L8 10L10 6L12 2L14 6L16 10L14 14L12 18Z"></path></svg>
          <span>Startups</span>
          <div class="active-indicator"></div>
        </a>
        <button class="bottom-nav-item" id="bottom-nav-more" aria-expanded="false" aria-controls="more-bottom-sheet">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <span>More</span>
        </button>
      </nav>

      <!-- More Bottom Sheet Modal -->
      <div id="more-bottom-sheet" class="bottom-sheet-overlay" aria-hidden="true">
        <div class="bottom-sheet-content">
          <div class="bottom-sheet-handle"></div>
          <div class="bottom-sheet-menu-container">
            <h3 class="bottom-sheet-title">Explore</h3>
            <ul class="bottom-sheet-menu">
              <li><a href="about.html">About Us</a></li>
              <!-- <li><a href="categories.html">Categories</a></li> -->
              <li><a href="funding.html">Funding</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="bookmarks.html">Bookmarks</a></li>
              <!-- 
              <li><a href="profile.html">Profile</a></li>
              <li><a href="settings.html">Settings</a></li>
              -->
            </ul>
          </div>
        </div>
      </div>
      </header>
  <!-- Breaking News Ticker Strip -->
  <section aria-labelledby="trending-heading" class="ticker-feed-wrapper">
    <h2 id="trending-heading" class="visually-hidden">Trending Now</h2>
    <div class="ticker-feed">
      <!-- Original Track -->
      <div class="ticker-track" aria-hidden="false">
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-accent); text-transform: uppercase;">Market Update</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=nasdaq-surge" style="font-weight: 600;">Nasdaq 100 sees 5% surge on AI earnings</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">2 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-success); text-transform: uppercase;">Funding</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=stripe-acquires" style="font-weight: 600;">Stripe acquires another checkout startup</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">4 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-text-main); text-transform: uppercase;">Policy</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=eu-passes" style="font-weight: 600;">EU passes comprehensive data framework</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">5 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-accent); text-transform: uppercase;">Startups</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=yc-cohort" style="font-weight: 600;">Y Combinator announces new cohort</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">7 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-text-main); text-transform: uppercase;">AI</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=openai-gpt5" style="font-weight: 600;">OpenAI releases GPT-5 preview to developers</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">12 hrs ago</span>
        </div>
      </div>
      <!-- Duplicated Track for Seamless Loop -->
      <div class="ticker-track" aria-hidden="true">
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-accent); text-transform: uppercase;">Market Update</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=nasdaq-surge" style="font-weight: 600;">Nasdaq 100 sees 5% surge on AI earnings</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">2 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-success); text-transform: uppercase;">Funding</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=stripe-acquires" style="font-weight: 600;">Stripe acquires another checkout startup</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">4 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-text-main); text-transform: uppercase;">Policy</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=eu-passes" style="font-weight: 600;">EU passes comprehensive data framework</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">5 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-accent); text-transform: uppercase;">Startups</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=yc-cohort" style="font-weight: 600;">Y Combinator announces new cohort</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">7 hrs ago</span>
        </div>
        <div class="strip-ticker">
          <span style="font-weight: 700; color: var(--color-text-main); text-transform: uppercase;">AI</span><span style="margin: 0 var(--spacing-2);">&middot;</span><a href="article.html?id=openai-gpt5" style="font-weight: 600;">OpenAI releases GPT-5 preview to developers</a><span style="margin: 0 var(--spacing-2);">&middot;</span><span style="color: var(--color-text-mute);">12 hrs ago</span>
        </div>
      </div>
    </div>
  </section>

    `;
  }

  bindEvents() {
    const bottomNavMore = this.querySelector('#bottom-nav-more');
    const bottomSheet = this.querySelector('#more-bottom-sheet');
    const bottomSheetContent = this.querySelector('.bottom-sheet-content');
    const searchToggle = this.querySelector('#search-toggle');

    if (bottomNavMore && bottomSheet) {
      const openSheet = () => {
        bottomSheet.classList.add('is-open');
        bottomSheet.setAttribute('aria-hidden', 'false');
        bottomNavMore.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      };

      const closeSheet = () => {
        bottomSheet.classList.remove('is-open');
        bottomSheet.setAttribute('aria-hidden', 'true');
        bottomNavMore.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      };

      bottomNavMore.addEventListener('click', openSheet);
      
      bottomSheet.addEventListener('click', (e) => {
        if (e.target === bottomSheet) closeSheet();
      });

      // Touch gesture (swipe down to close)
      let startY = 0;
      let currentY = 0;
      
      bottomSheetContent.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        bottomSheetContent.style.transition = 'none';
      }, { passive: true });

      bottomSheetContent.addEventListener('touchmove', (e) => {
        currentY = e.touches[0].clientY - startY;
        if (currentY > 0) {
          bottomSheetContent.style.transform = `translateY(${currentY}px)`;
        }
      }, { passive: true });

      bottomSheetContent.addEventListener('touchend', () => {
        bottomSheetContent.style.transition = '';
        bottomSheetContent.style.transform = '';
        if (currentY > 100) {
          closeSheet();
        }
        currentY = 0;
      });
    }

    if (searchToggle) {
      searchToggle.addEventListener('click', () => {
        const searchModal = document.querySelector('search-modal');
        if (searchModal) {
          searchModal.open();
        }
      });
    }
  }
}

customElements.define('app-header', AppHeader);
