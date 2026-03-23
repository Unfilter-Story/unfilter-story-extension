
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const latest = await prisma.discoveryCache.findFirst({
    where: { source: 'Inc42 Funding' },
    orderBy: { pubDate: 'desc' }
  });
  const oldest = await prisma.discoveryCache.findFirst({
    where: { source: 'Inc42 Funding' },
    orderBy: { pubDate: 'asc' }
  });

  console.log('Inc42 Funding - Latest:', latest?.pubDate?.toISOString(), latest?.title);
  console.log('Inc42 Funding - Oldest:', oldest?.pubDate?.toISOString(), oldest?.title);
  
  const allDates = await prisma.discoveryCache.findMany({
    where: { source: 'Inc42 Funding' },
    select: { pubDate: true },
    orderBy: { pubDate: 'desc' }
  });
  console.log('Inc42 Funding counts by year:', allDates.reduce((acc, d) => {
    const year = d.pubDate.getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {}));
}

main().catch(console.error).finally(() => prisma.$disconnect());
