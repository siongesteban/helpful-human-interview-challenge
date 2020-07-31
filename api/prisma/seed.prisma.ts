import { PrismaClient } from '@prisma/client';

import { seedColor } from './seeders';

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    await seedColor(prisma);

    console.log('Done.');
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    process.exit();
  }
};

main();
