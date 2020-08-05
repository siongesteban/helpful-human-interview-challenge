import { Swatch } from '@prisma/client';
import DataLoader from 'dataloader';

export type SwatchesLoader = DataLoader<number, Swatch[]>;
