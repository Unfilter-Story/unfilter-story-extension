/* d:\unfilterstory\js\components\AppFooter.js */

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {
    const isNewsletterPage = window.location.pathname.includes('newsletter');
    const preFooterCta = isNewsletterPage ? '' : `
      
      <div class="container" style="padding-top: var(--spacing-16);">
        <!-- 9. Newsletter Subscription Block -->
    <section aria-labelledby="newsletter-heading" style="background-color: #111; border-radius: 24px; padding: clamp(2.5rem, 6vw, 4rem); margin-bottom: var(--spacing-16); display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--spacing-12); align-items: center; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);">
      
      <!-- Left side: Text Content -->
      <div style="color: white; padding-right: var(--spacing-4);">
        <h2 id="newsletter-heading" style="font-family: var(--font-serif); font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 700; color: white; margin-bottom: var(--spacing-2); letter-spacing: -0.02em;">Get Real Startup Stories</h2>
        <p style="font-size: clamp(1.125rem, 1.5vw, 1.25rem); font-weight: 500; margin-bottom: var(--spacing-8); color: rgba(255, 255, 255, 0.95); line-height: 1.4;">No fluff. No hype. Just the truth.</p>
        <p style="font-size: 0.95rem; color: rgba(255, 255, 255, 0.7); margin: 0;">Join 10,000+ founders and builders in the truth-first ecosystem.</p>
      </div>

      <!-- Right side: Subscription Card -->
      <div style="background-color: white; border-radius: 16px; padding: var(--spacing-8); box-shadow: 0 20px 40px rgba(0,0,0,0.15);">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: var(--spacing-6); margin-top: 0;">Subscribe to Our Newsletter</h3>
        <form class="pre-footer-newsletter-form" novalidate style="display: flex; flex-direction: column; gap: var(--spacing-4); margin: 0;">
          <input type="email" placeholder="Your email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" style="width: 100%; padding: var(--spacing-4); border: 1px solid #e5e7eb; border-radius: 8px; font-size: 1rem; background: #fff; color: #111; outline: none; transition: border-color 0.2s;">
          <button type="submit" style="width: 100%; padding: var(--spacing-4); background: #EF4444; color: white; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: opacity 0.2s, transform 0.2s; display: flex; justify-content: center; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);">
            Subscribe Now &rarr;
          </button>
        </form>
      </div>

    </section>
    

      </div>
  
      `;

    this.innerHTML = `
      ${preFooterCta}
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
