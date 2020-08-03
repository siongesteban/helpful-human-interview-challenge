import { PrismaClient, HueCreateInput } from '@prisma/client';

import { logStart, logEnd } from '../log.prisma';

const hues: HueCreateInput[] = [
  {
    name: 'Red',
    swatches: {
      create: [
        {
          hex: 'cd5c5c',
          colors: {
            create: [
              {
                hex: 'b85252',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: 'a44949',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: '8f4040',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '7b3737',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '662e2e',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Orange',
    swatches: {
      create: [
        {
          hex: 'ffa500',
          colors: {
            create: [
              {
                hex: 'e59400',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: 'cc8400',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: 'b27300',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '996300',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '7f5200',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Yellow',
    swatches: {
      create: [
        {
          hex: 'ffff00',
          colors: {
            create: [
              {
                hex: 'e5e500',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: 'cccc00',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: 'b2b200',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '999900',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '7f7f00',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Green',
    swatches: {
      create: [
        {
          hex: '00ff00',
          colors: {
            create: [
              {
                hex: '00e500',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: 'a5d6a7',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: '00cc00',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '00b200',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '009900',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Blue',
    swatches: {
      create: [
        {
          hex: '0000ff',
          colors: {
            create: [
              {
                hex: '0000e5',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: '90caf9',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: '0000cc',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '0000b2',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '000099',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Purple',
    swatches: {
      create: [
        {
          hex: '9b30ff',
          colors: {
            create: [
              {
                hex: '8b2be5',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: 'ce93d8',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: '7c26cc',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '6c21b2',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '5d1c99',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Brown',
    swatches: {
      create: [
        {
          hex: 'a52a2a',
          colors: {
            create: [
              {
                hex: '942525',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: '842121',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: '731d1d',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '631919',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '521515',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Gray',
    swatches: {
      create: [
        {
          hex: 'bebebe',
          colors: {
            create: [
              {
                hex: 'ababab',
                number: 'N100',
                paletteType: 'SHADE',
              },
              {
                hex: '989898',
                number: 'N200',
                paletteType: 'SHADE',
              },
              {
                hex: '858585',
                number: 'N300',
                paletteType: 'SHADE',
              },
              {
                hex: '727272',
                number: 'N400',
                paletteType: 'SHADE',
              },
              {
                hex: '5f5f5f',
                number: 'N500',
                paletteType: 'SHADE',
              },
            ],
          },
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
