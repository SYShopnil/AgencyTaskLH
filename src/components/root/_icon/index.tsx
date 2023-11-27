import { IIconStore, IconEnums } from '@src/types/root';
import React from 'react';
import { Treva } from './partners';
import Logo from './logo';
import { Arrow } from './arrow';
import { NavIconOne } from './navbar/icon-1';
import { TrapeziumArrow } from './trapezium-arrow';

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
    case IconEnums.NavIconOne: {
      return <NavIconOne />;
    }
    case IconEnums.TrapeziumArrow: {
      return <TrapeziumArrow />;
    }
  }
};

export default IconStore;
