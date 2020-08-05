import { PrismaClient } from '@prisma/client';

import { logStart, logEnd } from '../log.prisma';

const hues = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Brown',
  'Gray',
];

const reset = async (prisma: PrismaClient): Promise<void> => {
  await prisma.executeRaw('TRUNCATE TABLE hue RESTART IDENTITY CASCADE;');
};

export const seedHue = async (prisma: PrismaClient): Promise<void> => {
  logStart('hue');

  await reset(prisma);

  for (const hue of hues) {
    await prisma.hue.create({
      data: {
        name: hue,
      },
    });
  }

  logEnd('hue');
};
