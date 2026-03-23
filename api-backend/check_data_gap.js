
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const count2024 = await prisma.discoveryCache.count({
    where: {
      pubDate: {
        gte: new Date('2024-01-01'),
        lt: new Date('2025-01-01')
      }
    }
  });

  const count2025 = await prisma.discoveryCache.count({
    where: {
      pubDate: {
        gte: new Date('2025-01-01'),
        lt: new Date('2026-01-01')
      }
    }
  });

  console.log('Total 2024 items:', count2024);
  console.log('Total 2025 items:', count2025);
}

main().catch(console.error).finally(() => prisma.$disconnect());
