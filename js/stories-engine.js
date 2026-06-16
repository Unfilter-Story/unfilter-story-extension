/**
 * UNFILTERSTORY: Dynamic Editorial Streaming Engine
 * Architectural Blueprint: Unified, single-page infinite/hash-routed compilation
 */

// --- 1. CMS-Ready Data Schema & Ingestion Matrix ---
const storiesData = [
  {
    id: "the-great-re-platforming",
    title: "The Great Re-Platforming: How Enterprise Tech is Evolving in 2026",
    subtitle: "A comprehensive analysis of why Fortune 500 companies are dismantling their legacy monoliths in favor of composable, AI-native architectures, and the startups leading the charge.",
    categoryBadge: "EXCLUSIVE FEATURE",
    publishDate: "Oct 24, 2026",
    readingTime: "12 Min Read",
    viewsMetric: "18,500+ Views",
    author: { 
      name: "Sarah Mitchell", 
      title: "Senior Technology Editor", 
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80" 
    },
    heroImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    imageCaption: "Enterprise technology is shifting toward modular, AI-native infrastructure.",
    tableOfContents: [
      { label: "The Inflection Point", anchorId: "inflection" },
      { label: "Legacy Failures & Telemetry", anchorId: "legacy" },
      { label: "The Composable Shift", anchorId: "composable" },
      { label: "Future Horizon Forecasts", anchorId: "forecast" }
    ],
    contentSections: [
      {
        type: 'prose',
        data: "<p>For the past decade, enterprise IT has been defined by massive, monolithic software suites. Companies purchased all-in-one solutions from giant vendors, locking themselves into rigid architectures that were difficult to upgrade and impossible to customize at the edge.</p><p>But in 2026, the paradigm has violently shifted. The rise of AI-native tooling, coupled with a renewed focus on extreme capital efficiency, has triggered what industry analysts are calling <strong>The Great Re-Platforming</strong>.</p>"
      },
      {
        type: 'heading',
        data: { id: "inflection", text: "The Inflection Point" }
      },
      {
        type: 'prose',
        data: "<p>The breaking point for legacy systems wasn't just cost; it was velocity. When generative AI models became operationalized, legacy stacks simply couldn't integrate them fast enough. Data lakes became swamps. API gateways choked under the weight of unstructured data pipelines.</p>"
      },
      {
        type: 'pullquote',
        data: "We didn't just need a software upgrade. We needed a fundamental rewrite of our operational physics."
      },
      {
        type: 'heading',
        data: { id: "legacy", text: "Legacy Failures & Telemetry" }
      },
      {
        type: 'prose',
        data: "<p>Current telemetry data indicates that 68% of Fortune 500 CIOs plan to sunset at least two core legacy systems by Q3 2027. They are replacing them with federated networks of specialized micro-services.</p>"
      },
      {
        type: 'heading',
        data: { id: "composable", text: "The Composable Shift" }
      },
      {
        type: 'prose',
        data: "<p>The composable enterprise is no longer a buzzword; it is a survival mechanism. Startups building hyper-specific, API-first primitives (think Stripe for payments, but now for identity, logistics, and AI governance) are winning massive contracts away from incumbents.</p>"
      },
      {
        type: 'heading',
        data: { id: "forecast", text: "Future Horizon Forecasts" }
      },
      {
        type: 'prose',
        data: "<p>Looking toward 2030, the enterprise stack will be entirely unrecognizable. It will be self-healing, autonomously scaled, and deeply interconnected via decentralized identity protocols. The companies that understand this transition today are the ones that will define the market tomorrow.</p>"
      }
    ],
    relatedStorySlugs: ["100m-seed-round", "neo-brutalism"]
  },
  {
    id: "100m-seed-round",
    title: "The $100M Seed Round: A New Era of Funding",
    subtitle: "How sovereign wealth and mega-funds are bypassing traditional Series A/B rounds to dominate the cap tables of generational startups.",
    categoryBadge: "VENTURE CAPITAL",
    publishDate: "Oct 21, 2026",
    readingTime: "8 Min Read",
    viewsMetric: "12,200+ Views",
    author: { 
      name: "Marcus Reid", 
      title: "Venture Capital Analyst", 
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" 
    },
    heroImageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
    imageCaption: "Capital concentration is fundamentally altering startup trajectories.",
    tableOfContents: [
      { label: "The Death of the Series A", anchorId: "death-series-a" },
      { label: "Sovereign Wealth Entry", anchorId: "sovereign" },
      { label: "Founder Dilution Metrics", anchorId: "dilution" }
    ],
    contentSections: [
      {
        type: 'prose',
        data: "<p>The traditional venture capital ladder is broken. For a decade, the path was clear: raise a $2M seed, prove product-market fit, raise a $10M Series A, scale, and march toward an IPO. Today, that playbook is obsolete.</p>"
      },
      {
        type: 'heading',
        data: { id: "death-series-a", text: "The Death of the Series A" }
      },
      {
        type: 'prose',
        data: "<p>We are increasingly seeing foundational AI and deep-tech companies bypass the early-stage shuffle entirely. Mega-funds are deploying $100M+ checks into companies with zero revenue, purely on the strength of the founding team and the geopolitical importance of the technology.</p>"
      },
      {
        type: 'heading',
        data: { id: "sovereign", text: "Sovereign Wealth Entry" }
      },
      {
        type: 'prose',
        data: "<p>Sovereign wealth funds, traditionally limited partners in VC funds, are now leading deals directly. This influx of state-backed capital has warped valuation multiples and created a new tier of 'untouchable' startups.</p>"
      },
      {
        type: 'heading',
        data: { id: "dilution", text: "Founder Dilution Metrics" }
      },
      {
        type: 'prose',
        data: "<p>While the check sizes are massive, the corresponding dilution is punishing. Founders taking these mega-seeds often give up 30-40% of their company on day one, fundamentally altering the incentive structures of early-stage team building.</p>"
      }
    ],
    relatedStorySlugs: ["the-great-re-platforming"]
  },
  {
    id: "neo-brutalism",
    title: "Beyond Dark Mode: The Neo-Brutalism Resurgence",
    subtitle: "A deep dive into why enterprise SaaS platforms are dropping soft shadows for high-contrast, structural boundaries that enforce clarity over comfort.",
    categoryBadge: "DESIGN",
    publishDate: "Oct 18, 2026",
    readingTime: "10 Min Read",
    viewsMetric: "24,000+ Views",
    author: { 
      name: "Elena Rodriguez", 
      title: "Lead UI Architect", 
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80" 
    },
    heroImageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80",
    imageCaption: "High-contrast structural boundaries enforce clarity over comfort.",
    tableOfContents: [
      { label: "The Soft UI Backlash", anchorId: "soft-backlash" },
      { label: "Structural Hierarchy", anchorId: "hierarchy" },
      { label: "Performance Implications", anchorId: "performance" }
    ],
    contentSections: [
      {
        type: 'prose',
        data: "<p>For years, product design was dominated by 'soft UI'—blurred shadows, rounded corners, and pastel gradients that made software feel approachable. But as tools became more complex and data-dense, this aesthetic began to fail.</p>"
      },
      {
        type: 'heading',
        data: { id: "soft-backlash", text: "The Soft UI Backlash" }
      },
      {
        type: 'prose',
        data: "<p>When you have a dashboard with 50 unique metrics, soft shadows create visual noise. Boundaries blur. Contrast suffers. Enterprise users need precision, not comfort.</p>"
      },
      {
        type: 'heading',
        data: { id: "hierarchy", text: "Structural Hierarchy" }
      },
      {
        type: 'prose',
        data: "<p>Neo-Brutalism returns to the fundamentals: harsh 1px borders, high-contrast monochrome palettes, and aggressive typography. It uses structure, rather than depth, to organize information. It is utilitarian, unapologetic, and highly efficient.</p>"
      },
      {
        type: 'pullquote',
        data: "We are designing tools, not toys. The interface should get out of the way and let the data speak."
      },
      {
        type: 'heading',
        data: { id: "performance", text: "Performance Implications" }
      },
      {
        type: 'prose',
        data: "<p>By stripping away complex CSS filters and rendering heavy gradients, Neo-Brutalist interfaces are fundamentally faster. They reduce GPU load and improve rendering times, critical metrics when dealing with massive data streams.</p>"
      }
    ],
    relatedStorySlugs: ["the-great-re-platforming"]
  }
];


// --- 2. Dynamic Rendering Engine ---

function renderArticle(story) {
  let html = `
    <article id="${story.id}" class="mb-24 pt-12 lg:pt-0 pb-12 border-b border-gray-200 dark:border-gray-800 last:border-0 relative">
      
      <!-- Metadata Header -->
      <div class="flex items-center gap-2 mb-6">
        <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 border border-brand-red/20 rounded">${story.categoryBadge}</span>
      </div>
      
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-gray-900 dark:text-white" style="text-wrap: balance;">
        ${story.title}
      </h1>
      
      <p class="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8">
        ${story.subtitle}
      </p>

      <div class="flex flex-wrap items-center gap-6 mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-3">
          <img src="${story.author.avatarUrl}" alt="${story.author.name}" class="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-[#0B0F19]">
          <div>
            <p class="text-sm font-bold text-gray-900 dark:text-white leading-tight">${story.author.name}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">${story.author.title}</p>
          </div>
        </div>
        <div class="h-8 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
        <div class="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-wider">
          <div class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${story.publishDate}</div>
          <div class="flex items-center gap-1.5"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${story.readingTime}</div>
          <div class="flex items-center gap-1.5"><i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i> ${story.viewsMetric}</div>
        </div>
      </div>

      <!-- Hero Visual -->
      <div class="mb-12">
        <div class="hero-img-container rounded-[24px] shadow-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 h-[300px] md:h-[400px] w-full relative group">
          <img src="${story.heroImageUrl}" alt="${story.title}" class="hero-img-inner w-full h-full object-cover absolute top-0 left-0" style="object-position: 50% 0%;">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[24px] pointer-events-none"></div>
        </div>
        <p class="text-center text-xs font-mono text-gray-500 mt-4 uppercase tracking-widest">${story.imageCaption}</p>
      </div>

      <!-- Core Content Stream -->
      <div class="prose dark:prose-invert prose-lg max-w-none">
  `;

  // Process Content Sections
  story.contentSections.forEach(section => {
    if (section.type === 'prose') {
      html += section.data;
    } else if (section.type === 'heading') {
      html += `<h2 id="${story.id}-${section.data.id}" class="scroll-mt-32 group flex items-center gap-3">
        ${section.data.text}
        <a href="#${story.id}-${section.data.id}" class="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-brand-red transition-opacity"><i data-lucide="link" class="w-5 h-5"></i></a>
      </h2>`;
    } else if (section.type === 'pullquote') {
      html += `<blockquote>"${section.data}"</blockquote>`;
    }
  });

  html += `
      </div>
    </article>
  `;

  return html;
}

function renderSidebarTOC(story) {
  let html = `
    <div class="mb-8" id="toc-${story.id}">
      <h4 class="text-xs font-bold font-mono uppercase tracking-widest text-gray-900 dark:text-white mb-4 line-clamp-2">${story.title}</h4>
      <nav class="flex flex-col gap-1 border-l-2 border-gray-100 dark:border-gray-800 relative">
  `;

  story.tableOfContents.forEach(item => {
    html += `
        <a href="#${story.id}-${item.anchorId}" class="toc-link block pl-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors relative left-[-2px] border-l-2 border-transparent">
          ${item.label}
        </a>
    `;
  });

  html += `
      </nav>
    </div>
  `;
  return html;
}

function renderRelatedStories(activeStory) {
  const container = document.getElementById('related-stories-container');
  if(!container) return;
  
  let html = '';
  const relatedSlugs = activeStory.relatedStorySlugs || [];
  
  // If no related stories defined, pick 2 random ones
  const related = relatedSlugs.length > 0 
    ? storiesData.filter(s => relatedSlugs.includes(s.id))
    : storiesData.filter(s => s.id !== activeStory.id).slice(0, 2);

  related.forEach(story => {
    html += `
      <a href="#${story.id}" class="group block">
        <div class="w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-gray-100 dark:bg-gray-800 relative">
          <img src="${story.heroImageUrl}" alt="${story.categoryBadge}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-2 left-2 px-1.5 py-0.5 bg-black/80 backdrop-blur text-white text-[8px] font-bold font-mono uppercase tracking-widest rounded border border-white/10">${story.categoryBadge}</div>
        </div>
        <h5 class="text-sm font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors line-clamp-2">${story.title}</h5>
      </a>
    `;
  });

  container.innerHTML = html;
}

// --- 3. Hardware-Accelerated Initialization & Observer Telemetry ---

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('stories-container');
  const tocSidebar = document.getElementById('toc-sidebar');
  
  // Build entire DOM tree
  let htmlContent = '';
  let tocContent = '';
  
  storiesData.forEach(story => {
    htmlContent += renderArticle(story);
    tocContent += renderSidebarTOC(story);
  });

  container.innerHTML = htmlContent;
  tocSidebar.innerHTML = `<div class="border-l border-gray-200 dark:border-gray-800 pl-6 py-2">${tocContent}</div>`;
  
  // Re-init lucide icons for newly injected DOM
  if(window.lucide) {
    window.lucide.createIcons();
  }

  // Set up observers
  setupObservers();
  setupScrollProgress();

  // Initial Hash Routing
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  } else {
    // Default to first story in related column
    renderRelatedStories(storiesData[0]);
  }
});

function setupObservers() {
  // 1. Article Observer (updates URL, Metadata, Related Stories)
  const articleObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Trigger when article takes up upper-middle screen
    threshold: 0
  };

  const articleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const articleId = entry.target.id;
        const storyData = storiesData.find(s => s.id === articleId);
        
        if (storyData) {
          // Update URL without reload
          window.history.replaceState(null, null, `#${articleId}`);
          
          // Update Meta Data
          document.title = `${storyData.title} | UnfilterStory`;
          document.querySelector('meta[name="description"]')?.setAttribute("content", storyData.subtitle);
          
          // Highlight Active TOC Group
          document.querySelectorAll('[id^="toc-"]').forEach(el => el.classList.add('opacity-40'));
          const activeTocGroup = document.getElementById(`toc-${articleId}`);
          if (activeTocGroup) activeTocGroup.classList.remove('opacity-40');
          
          // Update Related Sidebar
          renderRelatedStories(storyData);
        }
      }
    });
  }, articleObserverOptions);

  document.querySelectorAll('article[id]').forEach(article => {
    articleObserver.observe(article);
  });

  // 2. Section Heading Observer (Updates active link in TOC)
  const headingObserverOptions = {
    root: null,
    rootMargin: '-100px 0px -70% 0px',
    threshold: 0
  };

  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const headingId = entry.target.id;
        
        // Remove active class from all links
        document.querySelectorAll('.toc-link').forEach(link => {
          link.classList.remove('active');
        });
        
        // Add to current
        const activeLink = document.querySelector(`.toc-link[href="#${headingId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
          // Scroll TOC if needed
          activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }, headingObserverOptions);

  document.querySelectorAll('article h2[id]').forEach(heading => {
    headingObserver.observe(heading);
  });
}

function setupScrollProgress() {
  const progressBar = document.getElementById('progress-bar');
  if(!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (windowScroll / documentHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }, { passive: true });
}
