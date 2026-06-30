/* d:\unfilterstory\js\main.js */

import { initProgressIndicator } from './progress.js';
import './components/AppHeader.js';
import './components/AppFooter.js';
import './components/SearchModal.js';
import { initDynamicFeed } from './feed.js';
import { initCategoriesFeed } from './categories-feed.js';
import { initLatestStories } from './latest-stories.js';

document.addEventListener('DOMContentLoaded', () => {
  initProgressIndicator();
  initCategoriesFeed();
  initLatestStories();
  initDynamicFeed();
});
