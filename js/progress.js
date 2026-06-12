/* d:\unfilterstory\js\progress.js */

export function initProgressIndicator() {
  // Inject progress bar container if it doesn't exist
  if (!document.getElementById('reading-progress')) {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-bar-container';
    progressContainer.innerHTML = '<div id="reading-progress" class="progress-bar"></div>';
    document.body.prepend(progressContainer);
  }

  const progressBar = document.getElementById('reading-progress');
  let ticking = false;

  function updateProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / scrollHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
    ticking = false;
  }

  // Initialize progress on load
  updateProgress();

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
}
