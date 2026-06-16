/* d:\unfilterstory\js\components\AppFooter.js */

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {

    this.innerHTML = `
      <footer class="app-footer">
        <div class="footer-inner">
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
                <li><a href="interviews.html">Interviews</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4><a href="newsletter.html" style="color: inherit; text-decoration: none;">Newsletter</a></h4>
              <p style="font-size: 0.875rem; margin-bottom: var(--spacing-2);">Join 50,000+ innovators.</p>
              <form id="newsletter-form" class="input-group" novalidate>
                <label for="newsletter-email" class="visually-hidden">Email Address</label>
                <input type="email" id="newsletter-email" class="input-field" placeholder="Enter your email" required style="border-radius: 8px;">
                <button type="submit" class="btn" style="background-color: #111; color: white; border-radius: 9999px;">Subscribe</button>
              </form>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} UnfilterStory. All rights reserved.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
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

    const preFooterForm = this.querySelector('.pre-footer-newsletter-form');
    if (preFooterForm) {
      preFooterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = preFooterForm.querySelector('input[type="email"]');
        if (emailInput.value) {
          alert('Thanks for subscribing!');
          emailInput.value = '';
        }
      });
    }
  
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
