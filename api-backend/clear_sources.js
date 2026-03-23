
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.rssSource.deleteMany({});
  console.log('Cleared all RSS sources.');
  
  // Optionally clear cache too if we want a fresh start
  // await prisma.discoveryCache.deleteMany({});
  // console.log('Cleared discovery cache.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
