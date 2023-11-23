import React from 'react';
import ModuleStyle from './index.module.scss';

interface IOnAppearSkewsAnimation {
  children: React.ReactElement;
  isAppear: boolean;
}

export const OnAppearSkewsAnimation = ({
  children,
  isAppear,
}: IOnAppearSkewsAnimation) => {
  return (
    <div
      className={`${ModuleStyle['layoutMainWrapper']}  ${
        isAppear
          ? ModuleStyle['onAppearPosition']
          : ModuleStyle['initialPosition']
      }`}
    >
      {children}
    </div>
  );
};
