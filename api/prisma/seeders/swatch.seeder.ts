import { PrismaClient } from '@prisma/client';

import { logStart, logEnd } from '../log.prisma';

const swatchesByHue: Record<string, string[]> = {
  Red: [
    'cd5c5c',
    'ff6a6a',
    'ee6363',
    'cd5555',
    '8b3a3a',
    'ff0000',
    'ee0000',
    'cd0000',
    '8b0000',
    'c13744',
    'a11c29',
    'f8909a',
    'dd5c69',
  ],
  Orange: [
    'ffa500',
    'ee9a00',
    'cd8500',
    'ff4500',
    'ee4000',
    'cd3700',
    'ff8c00',
    'ff7f00',
    'ee7600',
    'cd6600',
    'ed5821',
    'c13c0a',
    'fb7c4d',
  ],
  Yellow: [
    'EDCA21',
    'C1A20A',
    '997F00',
    'FBDD4D',
    'FFE876',
    'FFF54F',
    'EDE226',
    'BEB40E',
    'FFF772',
    'FFFA9D',
    'BFB400',
    'E7DA00',
    'FFF100',
  ],
  Green: [
    '35A500',
    '2B8300',
    '1D5A00',
    '41C700',
    '4AE500',
    '4AE400',
    '3CBA00',
    '2F9100',
    '58EA12',
    '7AEC43',
    '80D955',
    '62C234',
    '44A218',
  ],
  Blue: [
    '0C34B9',
    '092890',
    '061E70',
    '2049D0',
    '4868D1',
    '3656C0',
    '143AB6',
    '0E2A87',
    '5571CD',
    '7D94DD',
    '2C81B8',
    '0A6DAE',
    '075080',
  ],
  Purple: [
    '9C30FF',
    '8C0EFF',
    '7D01EE',
    'B059FF',
    'C486FE',
    '7A00EA',
    '5A00AC',
    '470088',
    '8B0CFF',
    '992DFC',
    '4D0B89',
    '641CA6',
    '3E0770',
  ],
  Brown: [
    'DEB887',
    'B88C53',
    '96692F',
    'FFE3BF',
    'FFF1DF',
    '8D5000',
    '683B00',
    '3E2300',
    'AD6B15',
    'D08C33',
    'D38E34',
    'AE6D19',
    '884E02',
  ],
  Gray: [
    'BEBEBE',
    '939393',
    '646262',
    'ECECEC',
    '858585',
    '686868',
    '303030',
    '969696',
    'C6C5C5',
    'ababab',
    '848484',
    'B0AFAF',
    'E1E0E0',
  ],
};

const reset = async (prisma: PrismaClient): Promise<void> => {
  await prisma.executeRaw('TRUNCATE TABLE swatch RESTART IDENTITY CASCADE;');
};

export const seedSwatch = async (prisma: PrismaClient): Promise<void> => {
  logStart('swatch');

  await reset(prisma);

  const batchCount = 13;

  for (let batchNumber = 0; batchNumber < batchCount; batchNumber += 1) {
    for (const hue in swatchesByHue) {
      const hex = swatchesByHue[hue][batchNumber];

      if (!hex) {
        return;
      }

      await prisma.swatch.create({
        data: {
          hex: hex.toLowerCase(),
          hue: {
            connect: {
              name: hue,
            },
          },
        },
      });
    }
  }

  logEnd('swatch');
};
