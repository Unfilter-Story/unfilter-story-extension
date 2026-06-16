const fs = require('fs');
let js = fs.readFileSync('js/components/AppHeader.js', 'utf8');

const oldDesktopNav = `          <nav class="nav-desktop">
            <ul>
              <li><a href="news.html" \${isPage('news.html')}>News</a></li>
              <li><a href="articles.html" \${isPage('articles.html')}>Articles</a></li>
              <li><a href="stories.html" \${isPage('stories.html')}>Startup Stories</a></li>
              <li><a href="ai-innovation.html" \${isPage('ai-innovation.html')}>AI & Innovation</a></li>
              <li><a href="funding.html" \${isPage('funding.html')}>Funding</a></li>
              <li><a href="interviews.html" \${isPage('interviews.html')}>Interviews</a></li>
              <li><a href="about.html" \${isPage('about.html')}>About</a></li>
              <li><a href="contact.html" \${isPage('contact.html')}>Contact</a></li>
            </ul>
          </nav>`;

const newDesktopNav = `          <nav class="nav-desktop">
            <ul>
              <li class="dropdown">
                <a href="#" style="cursor: default;">
                  Media
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 1px;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="news.html" \${isPage('news.html')}>News</a></li>
                  <li><a href="articles.html" \${isPage('articles.html')}>Articles</a></li>
                  <li><a href="interviews.html" \${isPage('interviews.html')}>Interviews</a></li>
                </ul>
              </li>
              <li><a href="stories.html" \${isPage('stories.html')}>Startup Stories</a></li>
              <li><a href="ai-innovation.html" \${isPage('ai-innovation.html')}>AI & Innovation</a></li>
              <li><a href="funding.html" \${isPage('funding.html')}>Funding</a></li>
              <li><a href="about.html" \${isPage('about.html')}>About</a></li>
              <li><a href="contact.html" \${isPage('contact.html')}>Contact</a></li>
            </ul>
          </nav>`;

const oldMobileNav = `        <nav id="mobile-drawer" class="mobile-drawer" aria-hidden="true">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="articles.html">Articles</a></li>
            <li><a href="stories.html">Startup Stories</a></li>
            <li><a href="ai-innovation.html">AI & Innovation</a></li>
            <li><a href="funding.html">Funding</a></li>
            <li><a href="interviews.html">Interviews</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>`;

const newMobileNav = `        <nav id="mobile-drawer" class="mobile-drawer" aria-hidden="true">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li class="dropdown-group">
              <span class="dropdown-title">Media</span>
              <ul class="dropdown-items">
                <li><a href="news.html">News</a></li>
                <li><a href="articles.html">Articles</a></li>
                <li><a href="interviews.html">Interviews</a></li>
              </ul>
            </li>
            <li><a href="stories.html">Startup Stories</a></li>
            <li><a href="ai-innovation.html">AI & Innovation</a></li>
            <li><a href="funding.html">Funding</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>`;

js = js.replace(oldDesktopNav, newDesktopNav);
js = js.replace(oldMobileNav, newMobileNav);

fs.writeFileSync('js/components/AppHeader.js', js, 'utf8');
console.log('AppHeader nav updated.');
