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
            Unfilter<span>Story</span>
          </a>

          <nav class="nav-desktop">
            <ul>
              <li><a href="news.html" ${isPage('news.html')}>News</a></li>
              <li><a href="stories.html" ${isPage('stories.html')}>Startup Stories</a></li>
              <li><a href="ai-innovation.html" ${isPage('ai-innovation.html')}>AI & Innovation</a></li>
              <li><a href="funding.html" ${isPage('funding.html')}>Funding</a></li>
              <li><a href="interviews.html" ${isPage('interviews.html')}>Interviews</a></li>
              <li><a href="about.html" ${isPage('about.html')}>About</a></li>
              <li><a href="contact.html" ${isPage('contact.html')}>Contact</a></li>
            </ul>
          </nav>

          <div class="header-actions">
            <button id="search-toggle" class="btn-icon" aria-label="Open Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button id="theme-toggle" class="btn-icon" aria-label="Toggle Theme">
              <!-- Icon injected by theme.js -->
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
            <li><a href="stories.html">Startup Stories</a></li>
            <li><a href="ai-innovation.html">AI & Innovation</a></li>
            <li><a href="funding.html">Funding</a></li>
            <li><a href="interviews.html">Interviews</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>
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
