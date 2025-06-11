// import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from '@/lib/generated/prisma';
import sampleData from './sample-data';

// const prisma = new PrismaClient().$extends(withAccelerate());
const prisma = new PrismaClient();

async function main() {
  await prisma.cabin.deleteMany();
  await prisma.cabin.createMany({
    data: sampleData.cabins,
    // skipDuplicates: true,
  });

  console.log('Products data seeded successfully');
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
