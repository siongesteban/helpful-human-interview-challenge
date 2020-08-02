import React from 'react';

import { Button } from 'shared/components';

import { Menu } from '../menu';
import { S } from './sidebar.styles';

export const Sidebar: React.FC = () => (
  <S.Wrapper>
    <Button fullWidth>Random Color</Button>
    <Menu
      items={[
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Purple',
        'Brown',
        'Gray',
      ]}
    />
  </S.Wrapper>
);
