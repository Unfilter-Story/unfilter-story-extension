class EditorialSlider {
  constructor(element) {
    this.root = element;
    this.viewport = this.root.querySelector('.hero-carousel-viewport');
    this.slides = Array.from(this.root.querySelectorAll('.hero-carousel-slide'));
    this.navSegments = Array.from(this.root.querySelectorAll('.hero-nav-dot'));
    
    if (!this.viewport || this.slides.length === 0) return;

    this.currentIndex = 0;
    this.isTransitioning = false;
    this.autoplayInterval = 2500; // 2.5 seconds per slide
    this.autoplayTimer = null;
    
    // Touch tracking
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    this.bindEvents();
    this.goToSlide(0, false);
    this.startAutoplay();
  }

  bindEvents() {
    // Navigation Segments Click
    this.navSegments.forEach((segment, index) => {
      segment.addEventListener('click', () => {
        if (this.currentIndex === index || this.isTransitioning) return;
        this.goToSlide(index);
        this.resetAutoplay();
      });
    });

    // Pause Autoplay on Interaction or Focus
    this.root.addEventListener('mouseenter', () => this.stopAutoplay());
    this.root.addEventListener('mouseleave', () => this.startAutoplay());
    this.root.addEventListener('focusin', () => this.stopAutoplay());
    this.root.addEventListener('focusout', () => this.startAutoplay());

    // Touch Support for horizontal swipe
    this.viewport.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.stopAutoplay();
    }, { passive: true });

    this.viewport.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleTouchSwipe();
      this.startAutoplay();
    }, { passive: true });
  }

  handleTouchSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left -> Next slide
        this.nextSlide();
      } else {
        // Swipe right -> Prev slide
        this.prevSlide();
      }
    }
  }

  nextSlide() {
    if (this.isTransitioning) return;
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    if (this.isTransitioning) return;
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  goToSlide(index, animate = true) {
    this.isTransitioning = true;

    // Reset all slides and nav
    this.slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('is-active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('is-active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    this.navSegments.forEach((segment, i) => {
      if (i === index) {
        segment.classList.add('is-active');
      } else {
        segment.classList.remove('is-active');
      }
    });

    this.currentIndex = index;

    // Allow new transitions after CSS fades complete (~600ms)
    setTimeout(() => {
      this.isTransitioning = false;
    }, 600);
  }

  startAutoplay() {
    this.stopAutoplay();
    
    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoplayInterval);
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.hero-carousel');
  sliders.forEach(slider => new EditorialSlider(slider));
});
