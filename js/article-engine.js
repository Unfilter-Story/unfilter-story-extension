import { fetchArticleDetail } from './api.js';

export const ARTICLE_DATA = {
  "autonomous-architectures": {
    title: "The Next Generation of Autonomous Architectures in Fintech",
    subtitle: "How agentic AI systems are completely rewriting the infrastructure of global payments and bypassing traditional regulatory hurdles in 2026.",
    category: "AI",
    badge: "Startup Story",
    date: "Oct 28, 2026",
    readTime: "12 Min Read",
    author: {
      name: "Sarah Lin",
      role: "Chief Technology Editor",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80",
      bio: "Sarah is the Chief Technology Editor at UnfilterStory. She previously covered Silicon Valley infrastructure for Bloomberg and holds a master's in computational finance. She writes extensively on the intersection of AI and global markets."
    },
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Data visualization mapping the real-time execution nodes of a decentralized financial network.",
    tags: ["#Fintech", "#AI", "#Startups", "#VentureCapital"],
    content: `
      <h2 id="intro">Introduction: The Shift</h2>
      <p>
        In the wake of rapid technological expansion, the fundamental pillars defining financial infrastructure are undergoing a seismic mutation. We are moving from hardcoded, rule-based settlement engines into the realm of <span class="highlight">autonomous agents</span> capable of negotiating, auditing, and executing complex cross-border tranches in real-time.
      </p>
      <p>
        This isn't merely a theoretical whitepaper. As of Q3 2026, over $4B in daily transaction volume has quietly migrated to LLM-orchestrated sub-networks. The implications for traditional regulatory bodies are staggering.
      </p>

      <h2 id="problem">The Legacy Problem Definition</h2>
      <p>
        Before diving into the agentic solution, we must mathematically deconstruct the failure points of the existing SWIFT and legacy clearinghouse models. 
      </p>
      <blockquote>
        "Legacy financial systems were built on the premise of human verification. When you inject algorithmic latency into a system designed for fax machines, the friction costs scale exponentially, not linearly."
      </blockquote>
      <p>
        Here are the core infrastructural friction points currently plaguing the enterprise landscape:
      </p>
      <ul>
        <li><strong>T+2 Settlement Delays:</strong> Capital remains locked in transit, burning theoretical yield.</li>
        <li><strong>Compliance Overhead:</strong> Over 14% of gross revenue in Tier-1 banks is allocated strictly to AML/KYC manual review layers.</li>
        <li><strong>Siloed Liquidity Pools:</strong> Assets cannot move between fragmented national ecosystems without suffering conversion decay.</li>
      </ul>

      <h2 id="launch">The Founder Launch Sequence</h2>
      <p>
        Enter <em>Aether Protocol</em>. Founded by ex-Stripe engineers, they didn't attempt to build a better blockchain. Instead, they built a fleet of deterministic AI agents wrapped around standard fiat rails.
      </p>
      <figure>
        <img data-src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Engineers reviewing code metrics" class="lazy">
        <figcaption>Early telemetry dashboards showing the initial Aether AI agents processing live transaction queues.</figcaption>
      </figure>
      <p>
        Their approach utilized a simple but elegant API implementation that looks remarkably standard on the surface:
      </p>
      <pre><code>// Initialize the Aether Settlement Agent
const agent = new AetherAgent({
  network: 'fiat-usd',
  mode: 'autonomous-clearance',
  riskTolerance: 0.001
});

// The agent autonomously negotiates routing paths
const routingResult = await agent.routeTransaction({
  amount: 5000000,
  destination: 'EUR-IBAN',
  maxLatencyMs: 400
});</code></pre>

      <h2 id="growth">Growth Challenges & System Friction</h2>
      <p>
        Scaling a fleet of financial AI agents presented novel distributed computing challenges. The team documented a phenomenon they called "Algorithmic Gridlock," where two opposing AI agents from different banks would get stuck in infinite negotiation loops over fractional cent spreads.
      </p>
      <h3>Resolution Protocol</h3>
      <p>
        To solve this, a decentralized arbitrator network was established. Whenever an agent detects a stall, it delegates the negotiation to a highly-quantized referee model, reducing settlement failures by 99.4%.
      </p>

      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Expert Insight</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">Resolving algorithmic gridlock with quantized referee models was the turning point for Aether. It proved that agentic systems could self-correct at scale.</p>
      </div>

      <h2 id="funding">The Funding Matrix</h2>
      <p>
        Traditional venture capitalists were initially hesitant to back a system that actively sought to replace compliance officers with LLMs. However, sovereign wealth funds recognized the geopolitical advantage of controlling the fastest routing layer.
      </p>
      <table>
        <thead>
          <tr>
            <th>Funding Stage</th>
            <th>Capital Raised</th>
            <th>Lead Investor</th>
            <th>Pre-Money Val</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seed</td>
            <td>$14M</td>
            <td>Founders Fund</td>
            <td>$60M</td>
          </tr>
          <tr>
            <td>Series A</td>
            <td>$105M</td>
            <td>Mubadala</td>
            <td>$420M</td>
          </tr>
          <tr>
            <td>Series B</td>
            <td>$400M</td>
            <td>Sequoia / Sovereign</td>
            <td>$2.4B</td>
          </tr>
        </tbody>
      </table>

      <h2 id="lessons">Lessons Extracted</h2>
      <ol>
        <li>Regulators respond better to predictable math than theoretical promises.</li>
        <li>Agentic systems must have physical "kill switches" to pass enterprise compliance.</li>
        <li>The UI of the future is no UI at all; it is a perfectly formatted log file.</li>
      </ol>

      <h2 id="future">Future Expansion Roadmap</h2>
      <p>
        Looking forward to 2027, the protocol is expanding its agents to handle automated M&A escrow, dynamic real-estate token settlement, and autonomous treasury management for Fortune 500 companies. The era of the human accountant is drawing to a close, replaced by a much quieter, exponentially faster digital mind.
      </p>
    `
  },
  "the-pivot-to-hardware": {
    title: "The Pivot to Hardware: Why Software Startups are Building Physical Products",
    subtitle: "As software margins compress, a new wave of founders is finding defensibility in integrated hardware and software ecosystems, challenging the dominance of pure SaaS models.",
    category: "STARTUPS",
    badge: "Hardware",
    date: "Jun 12, 2026",
    readTime: "4 Min Read",
    author: {
      name: "Elena Rodriguez",
      role: "Hardware & Deep Tech Editor",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      bio: "Elena Rodriguez covers the intersection of physical infrastructure and software. She previously wrote for Wired."
    },
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Workspace containing various hardware prototypes and software interfaces.",
    tags: ["#Hardware", "#DeepTech", "#Startups", "#VentureCapital"],
    content: `
      
      <h2 id="intro">The Margin Squeeze</h2>
      <p>For the last decade, software was eating the world. But as CAC (Customer Acquisition Cost) skyrockets and SaaS multiples compress, the pure software playbook is showing cracks.</p>
      
      <blockquote>"Software can be copied. Ecosystems are much harder to replicate."</blockquote>
      
      <p>Companies that control the hardware capture exponentially more value. We're seeing a massive resurgence in physical product development, spearheaded by founders who cut their teeth in pure software.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">Software creates the margin, but hardware builds the moat. Investors are now actively seeking hybrid companies that can defend their distribution.</p>
      </div>

      <h2 id="case-studies">Hardware As A Moat: Case Studies</h2>
      <p>Building an integrated ecosystem fundamentally changes user retention. Let's look at three distinct architectural approaches:</p>
      
      <div class="space-y-6 my-8">
        <!-- Case 1 -->
        <div class="p-6 bg-gray-50 dark:bg-[#0D121F] rounded-xl border border-gray-200 dark:border-gray-800 border-l-4 border-l-brand-red">
          <h4 class="font-bold text-lg mb-2">Tesla: The Computing Platform</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Tesla didn't just build an EV; they built a rolling server rack. Because they control the hardware, they can push over-the-air (OTA) updates that physically alter the car's performance, unlocking high-margin software upgrades (FSD) post-purchase.</p>
        </div>
        
        <!-- Case 2 -->
        <div class="p-6 bg-gray-50 dark:bg-[#0D121F] rounded-xl border border-gray-200 dark:border-gray-800 border-l-4 border-l-cyber-blue">
          <h4 class="font-bold text-lg mb-2">Whoop: Hardware as a Service (HaaS)</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Whoop gives the hardware away for "free" but locks the data behind a subscription. The hardware is just the sensor; the value is entirely generated by the software analytics engine.</p>
        </div>

        <!-- Case 3 -->
        <div class="p-6 bg-gray-50 dark:bg-[#0D121F] rounded-xl border border-gray-200 dark:border-gray-800 border-l-4 border-l-electric-violet">
          <h4 class="font-bold text-lg mb-2">Apple: The Walled Garden</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">The gold standard of hardware-software integration. By designing their own silicon (M-Series), Apple dictates the thermal envelope and power draw, enabling software performance that OEMs running on fragmented architectures literally cannot match.</p>
        </div>
      </div>

      <h2 id="economics">The Unit Economics</h2>
      <p>Hardware is traditionally hard. But with new rapid prototyping tools and modular supply chains, the initial capital expenditure has dropped significantly.</p>
      
      <!-- Statistic Cards -->
      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="p-6 bg-gray-50 dark:bg-[#0D121F] rounded-xl border border-gray-200 dark:border-gray-800 text-center">
          <div class="text-4xl font-black text-brand-red mb-1">65%</div>
          <div class="text-xs text-gray-500 font-mono uppercase tracking-widest">Founder Retention</div>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-[#0D121F] rounded-xl border border-gray-200 dark:border-gray-800 text-center">
          <div class="text-4xl font-black text-brand-red mb-1">3.2x</div>
          <div class="text-xs text-gray-500 font-mono uppercase tracking-widest">LTV Multiplier</div>
        </div>
      </div>
      
      <h2 id="analysis">Pros & Cons of Integrated Ecosystems</h2>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Pure Software (SaaS)</th>
            <th>Integrated (Hardware + Software)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Initial CapEx</strong></td>
            <td>Low. Focus is on engineering payroll.</td>
            <td>High. Supply chain, tooling, and R&D.</td>
          </tr>
          <tr>
            <td><strong>Gross Margins</strong></td>
            <td>Excellent (80-90%).</td>
            <td>Blended (Hardware: 30%, Software: 90%).</td>
          </tr>
          <tr>
            <td><strong>Defensibility (Moat)</strong></td>
            <td>Low/Medium. Easily cloned.</td>
            <td>Extremely High. Hard to replicate at scale.</td>
          </tr>
          <tr>
            <td><strong>Churn Rate</strong></td>
            <td>High. Easy to cancel a subscription.</td>
            <td>Low. Physical lock-in reduces churn.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="future">Conclusion</h2>
      <p>Expect to see more consumer apps launching companion devices in 2026. The physical world is the final frontier for defensible recurring revenue.</p>
    `
  }
};

export async function loadArticle() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id') || 'autonomous-architectures';

  let article = null;
  try {
    article = await fetchArticleDetail(articleId);
  } catch (err) {
    console.warn('API fetch failed, trying static fallback:', err);
  }
  if (!article) {
    article = ARTICLE_DATA[articleId] || null;
  }

  if (!article) {
    document.querySelector('.article-body').innerHTML = '<h2>Article not found</h2>';
    return;
  }

  // Update Metadata
  document.title = article.title + " | UnfilterStory";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', article.subtitle);

  
  // Update Breadcrumbs
  const breadcrumbSpan = document.getElementById('breadcrumb-current');
  if (breadcrumbSpan) breadcrumbSpan.textContent = article.title;
  const breadcrumbCat = document.getElementById('breadcrumb-category');
  if (breadcrumbCat) breadcrumbCat.textContent = article.category;

  // Populate Hero
  document.getElementById('article-badge-1').textContent = article.badge;
  document.getElementById('article-badge-2').textContent = article.category;
  document.getElementById('article-title').innerHTML = article.title;
  document.getElementById('article-subtitle').textContent = article.subtitle;
  
  // Populate Author Meta
  document.getElementById('author-avatar').src = article.author.avatar;
  document.getElementById('author-name').textContent = article.author.name;
  document.getElementById('author-meta').innerHTML = \`\${article.author.role} &bull; Updated \${article.date}\`;
  document.getElementById('article-read-time').innerHTML = \`<i data-lucide="clock" class="w-3 h-3 inline mr-1"></i> \${article.readTime}\`;
  
  // Populate Hero Image
  const heroImg = document.getElementById('hero-image');
  heroImg.dataset.src = article.heroImage;
  heroImg.src = article.heroImage; // Load immediately for hero
  heroImg.classList.add('loaded');
  document.getElementById('hero-caption').textContent = article.heroCaption;

  // Populate Content
  document.querySelector('.article-body').innerHTML = article.content;

  // Populate Tags
  const tagsContainer = document.getElementById('article-tags');
  tagsContainer.innerHTML = '';
  article.tags.forEach(tag => {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-bold rounded hover:bg-brand-red hover:text-white dark:hover:bg-brand-red transition-colors';
    a.textContent = tag;
    tagsContainer.appendChild(a);
  });

  // Populate Author Bio Block
  document.getElementById('bio-avatar').src = article.author.avatar;
  document.getElementById('bio-name').textContent = "Written by " + article.author.name;
  document.getElementById('bio-text').textContent = article.author.bio;

  // Generate TOC dynamically
  generateTOC();
  
  // Re-init icons
  if(window.lucide) {
    window.lucide.createIcons();
  }
}

function generateTOC() {
  const articleBody = document.querySelector('.article-body');
  const headings = articleBody.querySelectorAll('h2');
  const desktopNav = document.getElementById('desktop-toc-nav');
  const mobileNav = document.getElementById('mobile-toc-nav');
  
  if(desktopNav) desktopNav.innerHTML = '';
  if(mobileNav) mobileNav.innerHTML = '';
  
  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }
    
    const title = heading.textContent;
    const id = heading.id;
    
    if(desktopNav) {
      const deskLink = document.createElement('a');
      deskLink.href = '#' + id;
      deskLink.className = 'toc-link -ml-[18px]';
      deskLink.setAttribute('data-target', id);
      deskLink.textContent = title;
      desktopNav.appendChild(deskLink);
    }

    if(mobileNav) {
      const mobLink = document.createElement('a');
      mobLink.href = '#' + id;
      mobLink.className = 'block py-2 text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors';
      mobLink.textContent = title;
      mobLink.addEventListener('click', () => {
        document.getElementById('mobile-toc-content').classList.add('hidden');
        document.getElementById('mobile-toc-icon').classList.remove('rotate-180');
      });
      mobileNav.appendChild(mobLink);
    }
  });

  initScrollSpy();
}

function initScrollSpy() {
  const tocLinks = document.querySelectorAll('.toc-link');
  const headings = document.querySelector('.article-body').querySelectorAll('h2');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  ,
  "vector-databases": {
    title: "Vector Databases Secure Record Funding Amid AI Boom",
    subtitle: "The infrastructure supporting Large Language Models is becoming the most lucrative layer of the modern tech stack.",
    category: "AI & TECH",
    badge: "Funding",
    date: "Jun 11, 2026",
    readTime: "3 Min Read",
    author: {"name":"Marcus Reid","role":"AI Infrastructure Reporter","avatar":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80","bio":"Marcus covers AI infrastructure and data pipelines."},
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Server room and databases powering modern AI applications.",
    tags: ["#AI","#Databases","#Funding"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>Vector Databases Secure Record Funding Amid AI Boom</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "austin-tech": {
    title: "Austin's Tech Scene Matures Beyond the Hype",
    subtitle: "Five years after the great migration, the Texas capital has established its own distinct identity in deep tech.",
    category: "ECOSYSTEMS",
    badge: "Analysis",
    date: "Jun 11, 2026",
    readTime: "6 Min Read",
    author: {"name":"David Chen","role":"Ecosystems Analyst","avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80","bio":"David analyzes global tech hubs and startup migration patterns."},
    heroImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Austin tech city skyline at dusk.",
    tags: ["#Austin","#DeepTech","#Startups"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>Austin's Tech Scene Matures Beyond the Hype</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "global-regulators": {
    title: "Global Regulators Announce Unified AI Safety Framework",
    subtitle: "15 nations have agreed to a common standard for testing and deploying frontier AI models.",
    category: "POLICY",
    badge: "Breaking",
    date: "Just now",
    readTime: "5 Min Read",
    author: {"name":"Policy Desk","role":"Regulatory Updates","avatar":"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80","bio":"The UnfilterStory Policy Desk covers global tech regulation."},
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Abstract visualization of regulatory data flows.",
    tags: ["#Policy","#AI","#Regulation"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>Global Regulators Announce Unified AI Safety Framework</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "nasdaq-surge": {
    title: "Nasdaq 100 sees 5% surge on AI earnings",
    subtitle: "Market updates following spectacular earnings from major AI infrastructure providers.",
    category: "MARKETS",
    badge: "Update",
    date: "2 hrs ago",
    readTime: "2 Min Read",
    author: {"name":"Markets Desk","role":"Financial Updates","avatar":"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=150&q=80","bio":""},
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Stock market trends.",
    tags: ["#Markets","#Nasdaq","#AI"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>Nasdaq 100 sees 5% surge on AI earnings</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "stripe-acquires": {
    title: "Stripe acquires another checkout startup",
    subtitle: "Consolidation in the payments space continues as Stripe picks up another promising team.",
    category: "FUNDING",
    badge: "M&A",
    date: "4 hrs ago",
    readTime: "3 Min Read",
    author: {"name":"Funding Desk","role":"M&A Updates","avatar":"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=150&q=80","bio":""},
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Checkout technologies.",
    tags: ["#Stripe","#Fintech","#Acquisition"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>Stripe acquires another checkout startup</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "eu-passes": {
    title: "EU passes comprehensive data framework",
    subtitle: "New rules will dictate how user data is shared across borders.",
    category: "POLICY",
    badge: "Policy",
    date: "5 hrs ago",
    readTime: "4 Min Read",
    author: {"name":"Policy Desk","role":"Regulatory Updates","avatar":"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80","bio":""},
    heroImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "EU Parliament concepts.",
    tags: ["#EU","#Data","#Privacy"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>EU passes comprehensive data framework</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "yc-cohort": {
    title: "Y Combinator announces new cohort",
    subtitle: "The latest batch of startups is heavily skewed towards AI agents and developer tools.",
    category: "STARTUPS",
    badge: "Startups",
    date: "7 hrs ago",
    readTime: "4 Min Read",
    author: {"name":"Startup Desk","role":"Accelerator Updates","avatar":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=150&q=80","bio":""},
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Founders collaborating.",
    tags: ["#YC","#Startups","#Accelerator"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>Y Combinator announces new cohort</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "openai-gpt5": {
    title: "OpenAI releases GPT-5 preview to developers",
    subtitle: "The next generation model shows reasoning capabilities far beyond expectations.",
    category: "AI",
    badge: "Release",
    date: "12 hrs ago",
    readTime: "5 Min Read",
    author: {"name":"AI Desk","role":"Tech Updates","avatar":"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=150&q=80","bio":""},
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "AI generation visualization.",
    tags: ["#OpenAI","#GPT5","#AI"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>OpenAI releases GPT-5 preview to developers</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "ai-custom-chips": {
    title: "Why AI Startups Are Building Custom Chips",
    subtitle: "Nvidia's dominance is forcing a new wave of silicon startups focused on inference optimization.",
    category: "HARDWARE",
    badge: "Hardware",
    date: "Jun 10, 2026",
    readTime: "7 Min Read",
    author: {"name":"Elena Rodriguez","role":"Hardware Editor","avatar":"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80","bio":"Elena covers hardware."},
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Microchip architecture.",
    tags: ["#Hardware","#AI","#Silicon"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>Why AI Startups Are Building Custom Chips</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "100m-seed-round": {
    title: "The $100M Seed Round",
    subtitle: "How mega-funds are bypassing traditional Series A/B rounds to fund infrastructure.",
    category: "VENTURE CAPITAL",
    badge: "VC",
    date: "Jun 9, 2026",
    readTime: "5 Min Read",
    author: {"name":"VC Desk","role":"Funding Analytics","avatar":"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=150&q=80","bio":""},
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "Money.",
    tags: ["#VC","#Seed","#Funding"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>The $100M Seed Round</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
  "agentic-horizon": {
    title: "The Agentic Horizon",
    subtitle: "Why conversational interfaces are being replaced by autonomous agents in fintech.",
    category: "AI & INNOVATION",
    badge: "AI",
    date: "Jun 8, 2026",
    readTime: "6 Min Read",
    author: {"name":"Sarah Lin","role":"Chief Editor","avatar":"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80","bio":""},
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80",
    heroCaption: "AI concept.",
    tags: ["#Agents","#AI","#Fintech"],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This is a dynamically generated article payload for <strong>The Agentic Horizon</strong>. It serves as placeholder content to demonstrate the zero-dependency routing engine.</p>
      
      <div class="my-8 p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
        <h4 class="font-bold text-brand-red flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5"></i> Key Takeaway</h4>
        <p class="text-gray-700 dark:text-gray-300 font-medium">The article engine dynamically injects this payload, fully formatting the layout, updating the meta tags, and rebuilding the Table of Contents.</p>
      </div>

      <h2 id="analysis">Deep Analysis</h2>
      <p>In a production environment, this payload would be fetched from a headless CMS (like Sanity or Strapi) or a Supabase backend.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The system is working perfectly, seamlessly resolving the article request.</p>
`
  },
};

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-target') === entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  headings.forEach(h => spyObserver.observe(h));
}
