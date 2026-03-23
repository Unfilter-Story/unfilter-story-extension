
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const now = new Date();
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  
  console.log(`Purging discovery data older than: ${oneYearAgo.toISOString()}`);
  
  const result = await prisma.discoveryCache.deleteMany({
    where: {
      pubDate: {
        lt: oneYearAgo
      }
    }
  });
  
  console.log(`Successfully purged ${result.count} stale signals.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
