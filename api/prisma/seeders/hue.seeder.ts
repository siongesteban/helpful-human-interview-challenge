import { PrismaClient, HueCreateInput } from '@prisma/client';

import { logStart, logEnd } from '../log.prisma';

const hues: HueCreateInput[] = [
  {
    name: 'red',
    shades: {
      create: [
        {
          hex: 'ffcdd2',
          number: 'S100',
        },
        {
          hex: 'ef9a9a',
          number: 'S200',
        },
        {
          hex: 'e57373',
          number: 'S300',
        },
        {
          hex: 'ef5350',
          number: 'S400',
        },
        {
          hex: 'f44336',
          number: 'S500',
        },
        {
          hex: 'e53935',
          number: 'S600',
        },
        {
          hex: 'd32f2f',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'orange',
    shades: {
      create: [
        {
          hex: 'ffe0b2',
          number: 'S100',
        },
        {
          hex: 'ffcc80',
          number: 'S200',
        },
        {
          hex: 'ffb74d',
          number: 'S300',
        },
        {
          hex: 'ffa726',
          number: 'S400',
        },
        {
          hex: 'ff9800',
          number: 'S500',
        },
        {
          hex: 'fb8c00',
          number: 'S600',
        },
        {
          hex: 'f57c00',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'yellow',
    shades: {
      create: [
        {
          hex: 'fff9c4',
          number: 'S100',
        },
        {
          hex: 'fff59d',
          number: 'S200',
        },
        {
          hex: 'fff176',
          number: 'S300',
        },
        {
          hex: 'ffee58',
          number: 'S400',
        },
        {
          hex: 'ffeb3b',
          number: 'S500',
        },
        {
          hex: 'fdd835',
          number: 'S600',
        },
        {
          hex: 'fbc02d',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'green',
    shades: {
      create: [
        {
          hex: 'c8e6c9',
          number: 'S100',
        },
        {
          hex: 'a5d6a7',
          number: 'S200',
        },
        {
          hex: '81c784',
          number: 'S300',
        },
        {
          hex: '66bb6a',
          number: 'S400',
        },
        {
          hex: '4caf50',
          number: 'S500',
        },
        {
          hex: '43a047',
          number: 'S600',
        },
        {
          hex: '388e3c',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'blue',
    shades: {
      create: [
        {
          hex: 'bbdefb',
          number: 'S100',
        },
        {
          hex: '90caf9',
          number: 'S200',
        },
        {
          hex: '64b5f6',
          number: 'S300',
        },
        {
          hex: '42a5f5',
          number: 'S400',
        },
        {
          hex: '2196f3',
          number: 'S500',
        },
        {
          hex: '1e88e5',
          number: 'S600',
        },
        {
          hex: '1976d2',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'purple',
    shades: {
      create: [
        {
          hex: 'e1bee7',
          number: 'S100',
        },
        {
          hex: 'ce93d8',
          number: 'S200',
        },
        {
          hex: 'ba68c8',
          number: 'S300',
        },
        {
          hex: 'ab47bc',
          number: 'S400',
        },
        {
          hex: '9c27b0',
          number: 'S500',
        },
        {
          hex: '8e24aa',
          number: 'S600',
        },
        {
          hex: '7b1fa2',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'brown',
    shades: {
      create: [
        {
          hex: 'd7ccc8',
          number: 'S100',
        },
        {
          hex: 'bcaaa4',
          number: 'S200',
        },
        {
          hex: 'a1887f',
          number: 'S300',
        },
        {
          hex: '8d6e63',
          number: 'S400',
        },
        {
          hex: '795548',
          number: 'S500',
        },
        {
          hex: '6d4c41',
          number: 'S600',
        },
        {
          hex: '5d4037',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'gray',
    shades: {
      create: [
        {
          hex: 'f5f5f5',
          number: 'S100',
        },
        {
          hex: 'eeeeee',
          number: 'S200',
        },
        {
          hex: 'e0e0e0',
          number: 'S300',
        },
        {
          hex: 'bdbdbd',
          number: 'S400',
        },
        {
          hex: '9e9e9e',
          number: 'S500',
        },
        {
          hex: '757575',
          number: 'S600',
        },
        {
          hex: '616161',
          number: 'S700',
        },
      ],
    },
  },
];

const reset = async (prisma: PrismaClient): Promise<void> => {
  await prisma.executeRaw('TRUNCATE TABLE hue RESTART IDENTITY CASCADE;');
};

export const seedHue = async (prisma: PrismaClient): Promise<void> => {
  logStart('hue');

  await reset(prisma);

  for (const hue of hues) {
    await prisma.hue.create({ data: hue });
  }

  logEnd('hue');
};
