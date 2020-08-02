import { Hue } from '@prisma/client';
import DataLoader from 'dataloader';

export type HueLoader = DataLoader<number, Hue>;
