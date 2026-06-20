/* js/api.js — shared client for the Unfilter Story backend.
   The static site fetches published articles from the Fastify API and maps
   the backend field names (headline/body/featuredImageUrl/...) onto the shapes
   the existing renderers expect (title/excerpt/image/author/...). */

const PROD_API = 'https://unfilter-story-v1.onrender.com';
const LOCAL_HOSTS = ['localhost', '127.0.0.1', ''];

// Local dev hits the Fastify server on :3000; anything else uses the Render API.
export const API_BASE = LOCAL_HOSTS.includes(window.location.hostname)
  ? 'http://localhost:3000'
  : PROD_API;

// Editorial fallbacks for articles missing imagery/author so cards never break.
const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80';
const FALLBACK_AVATAR =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

async function getJSON(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`API ${path} responded ${res.status}`);
  }
  return res.json();
}

/** Strip HTML tags and collapse whitespace — used to derive an excerpt from body. */
function stripHtml(html) {
  if (!html) return '';
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
}

function authorName(author) {
  if (!author) return 'Unfilter Story';
  const name = [author.firstName, author.lastName].filter(Boolean).join(' ').trim();
  return name || 'Unfilter Story';
}

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

/** Map a backend Article to the card shape used by the homepage / listing feeds. */
export function toCard(a) {
  return {
    slug: a.slug,
    tag: a.category?.name || 'Insights',
    title: a.headline,
    excerpt: a.subHeadline || `${stripHtml(a.body).slice(0, 160)}…`,
    author: authorName(a.primaryAuthor),
    avatar: a.primaryAuthor?.avatarUrl || FALLBACK_AVATAR,
    image: a.featuredImageUrl || FALLBACK_IMAGE,
    readTime: a.readingTimeMins ? `${a.readingTimeMins} min read` : '',
    href: `article.html?id=${encodeURIComponent(a.slug)}`,
  };
}

/** Map a backend Article to the detail shape used by article-engine.js. */
export function toDetail(a) {
  const author = a.primaryAuthor || {};
  return {
    title: a.headline,
    subtitle: a.subHeadline || '',
    category: a.category?.name || 'Insights',
    badge: a.isBreakingNews ? 'Breaking' : (a.articleType || 'Article'),
    date: formatDate(a.publishedAt || a.updatedAt),
    readTime: a.readingTimeMins ? `${a.readingTimeMins} Min Read` : '',
    author: {
      name: authorName(author),
      role: author.designation || 'Contributor',
      avatar: author.avatarUrl || FALLBACK_AVATAR,
      bio: author.bio || '',
    },
    heroImage: a.featuredImageUrl || FALLBACK_IMAGE,
    heroCaption: a.imageCaption || '',
    tags: (a.articleTags || []).map((at) => `#${at.tag?.name || at.tag?.slug || ''}`).filter((t) => t !== '#'),
    content: a.body || '',
  };
}

/** Fetch published articles (newest first). Returns mapped cards. */
export async function fetchArticleCards() {
  const articles = await getJSON('/v1/articles');
  return Array.isArray(articles) ? articles.map(toCard) : [];
}

/** Fetch a single article by slug. Returns the mapped detail shape, or null if 404. */
export async function fetchArticleDetail(slug) {
  try {
    const article = await getJSON(`/v1/articles/${encodeURIComponent(slug)}`);
    return toDetail(article);
  } catch (err) {
    if (String(err.message).includes('404')) return null;
    throw err;
  }
}
