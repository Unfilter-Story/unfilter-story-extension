
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkUnclassified() {
  const unclassified = await prisma.discoveryCache.findMany({
    where: {
      categories: {
        contains: 'Other / Unclassified'
      }
    },
    take: 50
  });

  console.log('--- UNCLASSIFIED ARTICLES (50 samples) ---');
  unclassified.forEach(item => {
    console.log(`- ${item.title}`);
  });
}

checkUnclassified().catch(console.error).finally(() => prisma.$disconnect());
