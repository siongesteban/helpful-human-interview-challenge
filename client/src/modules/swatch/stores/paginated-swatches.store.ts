import { makeVar } from '@apollo/client';

import { PaginatedSwatches } from 'shared/types';

export const paginatedSwatchesStore = makeVar<PaginatedSwatches | null>(null);
