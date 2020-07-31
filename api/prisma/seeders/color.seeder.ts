import { PrismaClient, ColorCreateInput } from '@prisma/client';

import { logStart, logEnd } from '../log.prisma';

const colors: ColorCreateInput[] = [
  {
    name: 'red',
  },
  {
    name: 'orange',
  },
  {
    name: 'yellow',
  },
  {
    name: 'green',
  },
  {
    name: 'blue',
  },
  {
    name: 'purple',
  },
  {
    name: 'brown',
  },
  {
    name: 'gray',
  },
];

export const seedColor = async (prisma: PrismaClient): Promise<void> => {
  logStart('color');

  for (const color of colors) {
    await prisma.color.create({ data: color });
  }

  logEnd('color');
};
