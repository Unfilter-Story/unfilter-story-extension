/* d:\unfilterstory\js\components\AppFooter.js */

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.innerHTML = `
      <footer class="app-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <a href="index.html" class="logo" style="margin-bottom: var(--spacing-4);">
                <span class="logo-text">Unfilter<span>Story</span></span>
              </a>
              <p style="font-size: 0.95rem;">Premium digital journalism and insights for modern startup ecosystems and enterprise innovators.</p>
            </div>
            
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Categories</h4>
              <ul>
                <li><a href="stories.html">Startups</a></li>
                <li><a href="ai-innovation.html">AI & Innovation</a></li>
                <li><a href="funding.html">Funding</a></li>
                <li><a href="interviews.html">Interviews</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4><a href="newsletter.html" style="color: inherit; text-decoration: none;">Newsletter</a></h4>
              <p style="font-size: 0.875rem; margin-bottom: var(--spacing-2);">Join 50,000+ innovators.</p>
              <form id="newsletter-form" class="input-group" novalidate>
                <label for="newsletter-email" class="visually-hidden">Email Address</label>
                <input type="email" id="newsletter-email" class="input-field" placeholder="Enter your email" required>
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} UnfilterStory. All rights reserved.</p>
            <div class="social-links">
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="RSS Feed">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </a>
            </div>
            <div style="display: flex; gap: var(--spacing-4);">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  bindEvents() {
    const form = this.querySelector('#newsletter-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput.value) {
          alert('Thanks for subscribing!');
          emailInput.value = '';
        }
      });
    }
  }
}

customElements.define('app-footer', AppFooter);
