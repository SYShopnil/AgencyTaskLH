import { IIconStore, IconEnums } from '@src/types/root';
import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { Aven, CodeLab, FoxHub, RectangleShape, Treva } from './partners';
import Logo from './logo';
import { Arrow } from './arrow';

const IconStore = ({ iconName, fill }: IIconStore) => {
  switch (iconName) {
    case IconEnums.AiTwotoneHome: {
      return <AiTwotoneHome />;
    }
    case IconEnums.Aven: {
      return <Aven />;
    }
    case IconEnums.Logo: {
      return <Logo />;
    }
    case IconEnums.CodeLab: {
      return <CodeLab />;
    }
    case IconEnums.FoxHub: {
      return <FoxHub />;
    }
    case IconEnums.Rectangle: {
      return <RectangleShape />;
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
