import Parser from 'rss-parser';

const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
    'Cache-Control': 'no-cache'
  },
  timeout: 10000
});

const targets = [
  { name: 'ET Startups Simple', url: 'https://economictimes.indiatimes.com/rss/startups' },
  { name: 'ET Small Biz Startups', url: 'https://economictimes.indiatimes.com/small-biz/startups/rssfeeds/11959139.cms' },
  { name: 'Entrackr RSS Simple', url: 'https://entrackr.com/rss' },
  { name: 'Entrackr News Feed', url: 'https://entrackr.com/news/feed' },
  { name: 'Business Standard Tech', url: 'https://www.business-standard.com/rss/technology-108.rss' },
  { name: 'Outlook Startup', url: 'https://www.outlookindia.com/rss/sector/86/startup' } // Backup source
];

async function testFeeds() {
  for (const feed of targets) {
    try {
      console.log(`Testing ${feed.name}: ${feed.url}`);
      const result = await parser.parseURL(feed.url);
      console.log(`SUCCESS: Found ${result.items.length} items`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
    console.log('---');
  }
}

testFeeds();
