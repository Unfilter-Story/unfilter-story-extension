import Parser from 'rss-parser';

const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8'
  },
  timeout: 10000
});

const urls = [
  'https://yourstory.com/feed',
  'https://entrackr.com/feed',
  'https://economictimes.indiatimes.com/small-biz/startups/rssfeedsection/11959139.cms',
  'https://www.business-standard.com/rss/technology-108.rss',
  'https://trak.in/feed'
];

async function test() {
  for (const url of urls) {
    try {
      const feed = await parser.parseURL(url);
      console.log(`SUCCESS: ${url} -> ${feed.items.length} items`);
    } catch (err) {
      console.log(`FAILED: ${url} -> ${err.message}`);
    }
  }
}

test();
