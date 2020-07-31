import { PrismaClient, HueCreateInput } from '@prisma/client';

import { logStart, logEnd } from '../log.prisma';

const hues: HueCreateInput[] = [
  {
    name: 'Red',
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
    name: 'Orange',
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
    name: 'Deep Orange',
    shades: {
      create: [
        {
          hex: 'ffccbc',
          number: 'S100',
        },
        {
          hex: 'ffab91',
          number: 'S200',
        },
        {
          hex: 'ff8a65',
          number: 'S300',
        },
        {
          hex: 'ff7043',
          number: 'S400',
        },
        {
          hex: 'ff5722',
          number: 'S500',
        },
        {
          hex: 'f4511e',
          number: 'S600',
        },
        {
          hex: 'e64a19',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'Yellow',
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
    name: 'Green',
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
    name: 'Blue',
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
    name: 'Light Blue',
    shades: {
      create: [
        {
          hex: 'b3e5fc',
          number: 'S100',
        },
        {
          hex: '81d4fa',
          number: 'S200',
        },
        {
          hex: '4fc3f7',
          number: 'S300',
        },
        {
          hex: '29b6f6',
          number: 'S400',
        },
        {
          hex: '03a9f4',
          number: 'S500',
        },
        {
          hex: '039be5',
          number: 'S600',
        },
        {
          hex: '0288d1',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'Purple',
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
    name: 'Brown',
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
    name: 'Gray',
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
  {
    name: 'Blue Gray',
    shades: {
      create: [
        {
          hex: 'cfd8dc',
          number: 'S100',
        },
        {
          hex: 'b0bec5',
          number: 'S200',
        },
        {
          hex: '90a4ae',
          number: 'S300',
        },
        {
          hex: '78909c',
          number: 'S400',
        },
        {
          hex: '607d8b',
          number: 'S500',
        },
        {
          hex: '546e7a',
          number: 'S600',
        },
        {
          hex: '455a64',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'Pink',
    shades: {
      create: [
        {
          hex: 'f8bbd0',
          number: 'S100',
        },
        {
          hex: 'f48fb1',
          number: 'S200',
        },
        {
          hex: 'f06292',
          number: 'S300',
        },
        {
          hex: 'ec407a',
          number: 'S400',
        },
        {
          hex: 'e91e63',
          number: 'S500',
        },
        {
          hex: 'd81b60',
          number: 'S600',
        },
        {
          hex: 'c2185b',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'Indigo',
    shades: {
      create: [
        {
          hex: 'c5cae9',
          number: 'S100',
        },
        {
          hex: '9fa8da',
          number: 'S200',
        },
        {
          hex: '7986cb',
          number: 'S300',
        },
        {
          hex: '5c6bc0',
          number: 'S400',
        },
        {
          hex: '3f51b5',
          number: 'S500',
        },
        {
          hex: '3949ab',
          number: 'S600',
        },
        {
          hex: '303f9f',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'Teal',
    shades: {
      create: [
        {
          hex: 'b2dfdb',
          number: 'S100',
        },
        {
          hex: '80cbc4',
          number: 'S200',
        },
        {
          hex: '4db6ac',
          number: 'S300',
        },
        {
          hex: '26a69a',
          number: 'S400',
        },
        {
          hex: '009688',
          number: 'S500',
        },
        {
          hex: '00897b',
          number: 'S600',
        },
        {
          hex: '00796b',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'Lime',
    shades: {
      create: [
        {
          hex: 'f0f4c3',
          number: 'S100',
        },
        {
          hex: 'e6ee9c',
          number: 'S200',
        },
        {
          hex: 'dce775',
          number: 'S300',
        },
        {
          hex: 'd4e157',
          number: 'S400',
        },
        {
          hex: 'cddc39',
          number: 'S500',
        },
        {
          hex: 'c0ca33',
          number: 'S600',
        },
        {
          hex: 'afb42b',
          number: 'S700',
        },
      ],
    },
  },
  {
    name: 'Amber',
    shades: {
      create: [
        {
          hex: 'ffecb3',
          number: 'S100',
        },
        {
          hex: 'ffe082',
          number: 'S200',
        },
        {
          hex: 'ffd54f',
          number: 'S300',
        },
        {
          hex: 'ffca28',
          number: 'S400',
        },
        {
          hex: 'ffc107',
          number: 'S500',
        },
        {
          hex: 'ffb300',
          number: 'S600',
        },
        {
          hex: 'ffa000',
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
