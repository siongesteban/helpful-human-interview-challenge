import { Shade } from '@prisma/client';
import DataLoader from 'dataloader';

export type ShadesLoader = DataLoader<number, Shade[]>;
