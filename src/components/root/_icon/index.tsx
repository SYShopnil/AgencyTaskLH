import { IIconStore, IconEnums } from '@src/types/root';
import React from 'react';
import { Treva } from './partners';
import Logo from './logo';
import { Arrow } from './arrow';

const IconStore = ({ iconName, fill }: IIconStore) => {
  switch (iconName) {
    case IconEnums.Logo: {
      return <Logo />;
    }
    case IconEnums.Treva: {
      return <Treva />;
    }
    case IconEnums.Arrow: {
      return <Arrow fillInput={fill || ''} />;
    }
  }
};

export default IconStore;
