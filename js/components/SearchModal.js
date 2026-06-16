/* d:\unfilterstory\js\components\SearchModal.js */

class SearchModal extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.innerHTML = `
      <div id="search-modal" class="search-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="search-label">
        <button id="search-close" class="btn-icon search-close" aria-label="Close Search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="search-modal-inner">
          <label id="search-label" for="search-input" class="visually-hidden">Search UnfilterStory</label>
          <div class="search-input-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="search-input" class="search-modal-input" placeholder="Search articles, startups, funding..." autocomplete="off">
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    this.modal = this.querySelector('#search-modal');
    this.closeBtn = this.querySelector('#search-close');
    this.input = this.querySelector('#search-input');

    this.closeBtn.addEventListener('click', () => this.close());

    // Close on background click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('is-open')) {
        this.close();
      }
    });
  }

  open() {
    this.modal.classList.add('is-open');
    this.modal.setAttribute('aria-hidden', 'false');
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    // Slight delay to ensure transition starts before focus
    setTimeout(() => {
      this.input.focus();
    }, 50);
  }

  close() {
    this.modal.classList.remove('is-open');
    this.modal.setAttribute('aria-hidden', 'true');
    // Restore body scroll
    document.body.style.overflow = '';
    this.input.value = ''; // clear input
  }
}

customElements.define('search-modal', SearchModal);
