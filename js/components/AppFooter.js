/* d:\unfilterstory\js\components\AppFooter.js */

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {

    this.innerHTML = `
      <style>
        .global-cta-wrapper {
          padding: 4rem 1rem;
        }
        .global-cta-section {
          background: #000000;
          border-radius: 24px;
          padding: 4rem 2rem;
          color: white;
          font-family: var(--font-sans, 'Inter', sans-serif);
          max-width: 1200px;
          margin: 0 auto;
        }
        .global-cta-container {
          max-width: 960px; /* Reduced to pull elements closer together */
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .global-cta-container {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5rem;
          }
        }
        .global-cta-text {
          flex: 0 1 auto;
          max-width: 450px;
        }
        .global-cta-text h2 {
          font-family: var(--font-sans, 'Inter', sans-serif);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          line-height: 1.1;
          color: white;
        }
        .global-cta-text h3 {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          font-weight: 500;
          margin-bottom: 1rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.9);
        }
        .global-cta-text p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 0;
        }
        .global-cta-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .global-cta-card h4 {
          font-family: var(--font-sans, 'Inter', sans-serif);
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #111;
          margin-bottom: 1.5rem;
        }
        .global-cta-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          font-size: 0.95rem;
          margin-bottom: 1rem;
          transition: border-color 0.2s;
        }
        .global-cta-input:focus {
          outline: none;
          border-color: #D92525;
        }
        .global-cta-btn {
          width: 100%;
          background: radial-gradient(circle at center, #DF0000 0%, #5A0000 100%);
          color: white;
          border: none;
          padding: 0.875rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          transition: opacity 0.2s, transform 0.2s;
        }
        .global-cta-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      </style>

      <div class="global-cta-wrapper">
        <section class="global-cta-section">
          <div class="global-cta-container">
          <div class="global-cta-text">
            <h2>Get Real Startup Stories</h2>
            <h3>No fluff. No hype. Just the truth.</h3>
            <p>Join 10,000+ founders and builders in the truth-first ecosystem.</p>
          </div>
          <div class="global-cta-card">
            <h4>Subscribe to Our Newsletter</h4>
            <form id="global-newsletter-form">
              <input type="email" class="global-cta-input" placeholder="Your email" required>
              <button type="submit" class="global-cta-btn">
                Subscribe Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      </div>

      <footer class="app-footer">
        <div class="footer-inner">
          <div class="footer-grid">
            <div class="footer-col">
              <a href="index.html" class="logo" style="margin-bottom: var(--spacing-4);">
                <img src="images/new-logo.png" alt="UnfilterStory Logo" style="height: 60px; width: auto; object-fit: contain;">
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
