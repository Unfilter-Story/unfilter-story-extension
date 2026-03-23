import Parser from 'rss-parser';

const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8'
  },
  timeout: 10000
});

const initialSources = [
  { name: 'YourStory', url: 'https://yourstory.com/feed' },
  { name: 'Inc42', url: 'https://inc42.com/feed/' },
  { name: 'Entrackr', url: 'https://entrackr.com/feed/' },
  { name: 'Economic Times', url: 'https://economictimes.indiatimes.com/small-biz/startups/rssfeeds/11959139.cms' },
  { name: 'VCCircle', url: 'https://news.google.com/rss/search?q=site:vccircle.com&hl=en-IN&gl=IN&ceid=IN:en' },
  { name: 'LiveMint', url: 'https://www.livemint.com/rss/companies' },
  { name: 'Moneycontrol', url: 'https://news.google.com/rss/search?q=site:moneycontrol.com+startup&hl=en-IN&gl=IN&ceid=IN:en' },
  { name: 'StartupTalky', url: 'https://startuptalky.com/rss/' },
  { name: 'Entrepreneur India', url: 'https://india.entrepreneur.com/feed/' },
  { name: 'The Ken', url: 'https://the-ken.com/feed/' },
  { name: 'Morning Context', url: 'https://themorningcontext.com/feed/' },
  { name: 'Finshots', url: 'https://finshots.in/rss/' },
  { name: 'IndianStartupNews', url: 'https://indianstartupnews.com/rss' },
  { name: 'TICE News', url: 'https://www.tice.news/category/startup-story/feed/' },
  { name: 'StartupNews.fyi', url: 'https://startupnews.fyi/feed/' },
  { name: 'Google News', url: 'https://news.google.com/rss/search?q=Indian+Startup+News&hl=en-IN&gl=IN&ceid=IN:en' }
];

async function testAll() {
  for (const source of initialSources) {
    try {
      const feed = await parser.parseURL(source.url);
      console.log(`SUCCESS: ${source.name} (${source.url}) -> ${feed.items.length} items`);
      if (feed.items.length > 0) {
          console.log(`  Latest Item Date: ${feed.items[0].pubDate || feed.items[0].isoDate}`);
      }
    } catch (err) {
      console.log(`FAILED: ${source.name} (${source.url}) -> ${err.message}`);
    }
  }
}

testAll();
