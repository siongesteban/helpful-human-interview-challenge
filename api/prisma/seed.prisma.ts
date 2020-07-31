import { PrismaClient } from '@prisma/client';

import { seedHue } from './seeders';

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    await seedHue(prisma);

    console.log('Done.');
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    process.exit();
  }
};

main();
