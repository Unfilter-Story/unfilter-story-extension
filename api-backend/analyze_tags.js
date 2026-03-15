
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function analyzeTags() {
  const allItems = await prisma.discoveryCache.findMany();
  let noTags = 0;
  let onlyIndustry = 0;
  let onlySignals = 0;
  let both = 0;
  let otherUnclassified = 0;

  const signalNames = [
    'Funding', 'Startup Launch', 'Acquisition', 'Shutdown', 'Layoffs', 
    'Product News / Launch', 'Founder Story / Profile', 'Pivot', 'Funding Ask', 'Revenue Milestone',
    'Partnership', 'Expansion', 'Regulatory / Policy', 'Leadership / People', 'Legal / Litigation', 'Ecosystem News',
    'Market Insights / Reports', 'Tech Guides / Tutorials', 'Trends / Future Tech', 'Product Review / Opinion',
    'Innovation / Breakthrough'
  ];

  for (const item of allItems) {
    const categories = JSON.parse(item.categories || '[]');
    
    if (categories.includes('Other / Unclassified')) {
      otherUnclassified++;
      continue;
    }

    const signals = categories.filter(c => signalNames.includes(c));
    const industries = categories.filter(c => !signalNames.includes(c));

    if (categories.length === 0) noTags++;
    else if (signals.length > 0 && industries.length > 0) both++;
    else if (signals.length > 0) onlySignals++;
    else if (industries.length > 0) onlyIndustry++;
  }

  console.log(`Total items: ${allItems.length}`);
  console.log(`Items with NO tags (literal 0): ${noTags}`);
  console.log(`Items with 'Other / Unclassified': ${otherUnclassified}`);
  console.log(`Items with ONLY signal tags: ${onlySignals}`);
  console.log(`Items with ONLY industry tags: ${onlyIndustry}`);
  console.log(`Items with BOTH signals and industries: ${both}`);
  
  const failures = allItems.filter(item => JSON.parse(item.categories || '[]').includes('Other / Unclassified')).slice(0, 15);
  console.log('\nExamples of Unclassified:');
  failures.forEach(f => console.log(`- ${f.title}`));
}

analyzeTags().catch(console.error).finally(() => prisma.$disconnect());
