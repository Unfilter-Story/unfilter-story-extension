const API_BASE = window.API_BASE || 'http://localhost:3000';

class SearchModal extends HTMLElement {
  connectedCallback() {
    this._query = '';
    this._category = '';
    this._tag = '';
    this._debounceTimer = null;
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
            <input type="text" id="search-input" class="search-modal-input" placeholder="Search by title, category or tag..." autocomplete="off">
          </div>

          <!-- Active filters -->
          <div id="search-active-filters" style="display:none; margin-top:12px; display:flex; flex-wrap:wrap; gap:8px;"></div>

          <!-- Filter sections -->
          <div id="search-filters" style="margin-top:16px; display:none;">
            <div style="margin-bottom:12px;">
              <p style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#9CA3AF; margin-bottom:8px;">Filter by Category</p>
              <div id="search-categories" style="display:flex; flex-wrap:wrap; gap:8px;"></div>
            </div>
            <div>
              <p style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#9CA3AF; margin-bottom:8px;">Filter by Tag</p>
              <div id="search-tags" style="display:flex; flex-wrap:wrap; gap:8px;"></div>
            </div>
          </div>

          <!-- Results -->
          <div id="search-results" style="margin-top:20px;"></div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    this.modal = this.querySelector('#search-modal');
    this.closeBtn = this.querySelector('#search-close');
    this.input = this.querySelector('#search-input');
    this.resultsEl = this.querySelector('#search-results');
    this.filtersEl = this.querySelector('#search-filters');
    this.activeFiltersEl = this.querySelector('#search-active-filters');
    this.categoriesEl = this.querySelector('#search-categories');
    this.tagsEl = this.querySelector('#search-tags');

    this.closeBtn.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', (e) => { if (e.target === this.modal) this.close(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('is-open')) this.close();
    });

    this.input.addEventListener('input', (e) => {
      this._query = e.target.value.trim();
      clearTimeout(this._debounceTimer);
      this._debounceTimer = setTimeout(() => this._search(), 300);
    });
  }

  async open() {
    this.modal.classList.add('is-open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.input.focus(), 50);
    await this._loadFilters();
  }

  close() {
    this.modal.classList.remove('is-open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.input.value = '';
    this._query = '';
    this._category = '';
    this._tag = '';
    this.resultsEl.innerHTML = '';
    this.filtersEl.style.display = 'none';
    this.activeFiltersEl.style.display = 'none';
    this.activeFiltersEl.innerHTML = '';
  }

  async _loadFilters() {
    try {
      const [catRes, tagRes] = await Promise.all([
        fetch(`${API_BASE}/v1/categories`),
        fetch(`${API_BASE}/v1/tags`)
      ]);
      const categories = catRes.ok ? await catRes.json() : [];
      const tags = tagRes.ok ? await tagRes.json() : [];

      this.categoriesEl.innerHTML = categories.slice(0, 12).map(c => `
        <button class="search-filter-chip" data-type="category" data-value="${c.name}" style="${this._chipStyle(this._category === c.name)}">
          ${c.name}
        </button>
      `).join('');

      this.tagsEl.innerHTML = tags.slice(0, 20).map(t => `
        <button class="search-filter-chip" data-type="tag" data-value="${t.name}" style="${this._chipStyle(this._tag === t.name)}">
          #${t.name}
        </button>
      `).join('');

      this.filtersEl.style.display = categories.length || tags.length ? 'block' : 'none';

      this.querySelectorAll('.search-filter-chip').forEach(btn => {
        btn.addEventListener('click', () => this._toggleFilter(btn.dataset.type, btn.dataset.value));
      });
    } catch (err) {
      console.error('Failed to load search filters', err);
    }
  }

  _toggleFilter(type, value) {
    if (type === 'category') {
      this._category = this._category === value ? '' : value;
    } else {
      this._tag = this._tag === value ? '' : value;
    }
    this._updateActiveFilters();
    this._refreshChipStyles();
    this._search();
  }

  _updateActiveFilters() {
    const chips = [];
    if (this._category) chips.push({ label: this._category, type: 'category' });
    if (this._tag) chips.push({ label: `#${this._tag}`, type: 'tag' });

    if (chips.length) {
      this.activeFiltersEl.style.display = 'flex';
      this.activeFiltersEl.innerHTML = chips.map(c => `
        <span style="display:inline-flex; align-items:center; gap:6px; padding:4px 12px; background:#FFF0F5; border:1px solid #FECDD3; border-radius:999px; font-size:12px; font-weight:700; color:#E11D48;">
          ${c.label}
          <button data-type="${c.type}" style="background:none; border:none; cursor:pointer; color:#E11D48; font-size:14px; line-height:1; padding:0;">×</button>
        </span>
      `).join('');
      this.activeFiltersEl.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => this._toggleFilter(btn.dataset.type, btn.dataset.type === 'category' ? this._category : this._tag));
      });
    } else {
      this.activeFiltersEl.style.display = 'none';
      this.activeFiltersEl.innerHTML = '';
    }
  }

  _refreshChipStyles() {
    this.querySelectorAll('.search-filter-chip').forEach(btn => {
      const active = (btn.dataset.type === 'category' && this._category === btn.dataset.value) ||
                     (btn.dataset.type === 'tag' && this._tag === btn.dataset.value);
      btn.setAttribute('style', this._chipStyle(active));
    });
  }

  _chipStyle(active) {
    return active
      ? 'padding:5px 14px; border-radius:999px; border:1px solid #E11D48; background:#FFF0F5; color:#E11D48; font-size:12px; font-weight:700; cursor:pointer;'
      : 'padding:5px 14px; border-radius:999px; border:1px solid #E5E7EB; background:#F9FAFB; color:#374151; font-size:12px; font-weight:600; cursor:pointer;';
  }

  async _search() {
    if (!this._query && !this._category && !this._tag) {
      this.resultsEl.innerHTML = '';
      return;
    }

    this.resultsEl.innerHTML = `<p style="color:#9CA3AF; font-size:14px; text-align:center; padding:24px 0;">Searching...</p>`;

    try {
      const params = new URLSearchParams();
      if (this._query) params.set('q', this._query);
      if (this._category) params.set('category', this._category);
      if (this._tag) params.set('tag', this._tag);

      const res = await fetch(`${API_BASE}/v1/articles/search?${params}`);
      const articles = res.ok ? await res.json() : [];
      this._renderResults(articles);
    } catch (err) {
      this.resultsEl.innerHTML = `<p style="color:#EF4444; font-size:14px; text-align:center; padding:24px 0;">Something went wrong. Please try again.</p>`;
    }
  }

  _renderResults(articles) {
    if (!articles.length) {
      this.resultsEl.innerHTML = `<p style="color:#9CA3AF; font-size:14px; text-align:center; padding:24px 0;">No articles found.</p>`;
      return;
    }

    this.resultsEl.innerHTML = `
      <p style="font-size:12px; color:#9CA3AF; font-weight:600; margin-bottom:12px;">${articles.length} result${articles.length !== 1 ? 's' : ''}</p>
      <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:2px;">
        ${articles.map(a => {
          const tags = (a.articleTags || []).map(at => at.tag.name);
          const cat = a.category?.name || '';
          const img = a.featuredImageUrl
            ? `<img src="${a.featuredImageUrl}" alt="" style="width:64px; height:48px; object-fit:cover; border-radius:8px; flex-shrink:0;">`
            : `<div style="width:64px; height:48px; border-radius:8px; background:#F3F4F6; flex-shrink:0;"></div>`;
          return `
            <li>
              <a href="article.html?slug=${a.slug}" onclick="document.querySelector('search-modal').close()" style="display:flex; gap:14px; align-items:flex-start; padding:12px; border-radius:12px; text-decoration:none; color:inherit; transition:background 0.15s;" onmouseover="this.style.background='#F9FAFB'" onmouseout="this.style.background='transparent'">
                ${img}
                <div style="flex:1; min-width:0;">
                  <p style="font-size:14px; font-weight:700; color:#111827; margin:0 0 4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.headline}</p>
                  <div style="display:flex; flex-wrap:wrap; gap:6px; align-items:center;">
                    ${cat ? `<span style="font-size:11px; font-weight:700; color:#E11D48; background:#FFF0F5; padding:2px 8px; border-radius:999px;">${cat}</span>` : ''}
                    ${tags.slice(0, 3).map(t => `<span style="font-size:11px; color:#6B7280; font-weight:600;">#${t}</span>`).join('')}
                  </div>
                </div>
              </a>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  }
}

customElements.define('search-modal', SearchModal);
