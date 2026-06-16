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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span class="logo-text">Unfilter<span>Story</span></span>
          </a>

          <nav class="nav-desktop">
            <ul>
              <li><a href="news.html" ${isPage('news.html')}>News</a></li>
              <li><a href="articles.html" ${isPage('articles.html')}>Articles</a></li>
              <li><a href="interviews.html" ${isPage('interviews.html')}>Interviews</a></li>
              <li><a href="stories.html" ${isPage('stories.html')}>Startup Stories</a></li>
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
            <button id="mobile-menu-toggle" class="btn-icon menu-toggle" aria-label="Toggle Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <nav id="mobile-drawer" class="mobile-drawer" aria-hidden="true">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="articles.html">Articles</a></li>
            <li><a href="interviews.html">Interviews</a></li>
            <li><a href="stories.html">Startup Stories</a></li>
            <!-- 
            <li><a href="ai-innovation.html">AI & Innovation</a></li>
            <li><a href="funding.html">Funding</a></li>
            -->

            <li class="dropdown-group">
              <span class="dropdown-title">More</span>
              <ul class="dropdown-items">
                <li><a href="#">Guest Post</a></li>
                <li><a href="feature.html" style="color: #DC2626; font-weight: 600;">Feature Your Story</a></li>
              </ul>
            </li>
          </ul>
        </nav>
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
    const mobileMenuToggle = this.querySelector('#mobile-menu-toggle');
    const mobileDrawer = this.querySelector('#mobile-drawer');
    const searchToggle = this.querySelector('#search-toggle');

    if (mobileMenuToggle && mobileDrawer) {
      mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          mobileDrawer.classList.remove('is-open');
          mobileDrawer.setAttribute('aria-hidden', 'true');
        } else {
          mobileDrawer.classList.add('is-open');
          mobileDrawer.setAttribute('aria-hidden', 'false');
        }
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
