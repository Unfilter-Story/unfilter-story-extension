/* d:\unfilterstory\js\main.js */

import { initProgressIndicator } from './progress.js';
import './components/AppHeader.js';
import './components/AppFooter.js';
import './components/SearchModal.js';
import { initDynamicFeed } from './feed.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Reading Progress Indicator
  initProgressIndicator();
  
  // Initialize Dynamic Feed Engine
  initDynamicFeed();
});
