import { IBannerSectionBar } from '@src/types/root';
import Banner from './Banner';

import React from 'react';

export const BannerSectionBar = ({
  contents: banners,
  bannerBarSectionTestId,
}: IBannerSectionBar) => {
  return (
    <div
      className={`flex justify-center items-center`}
      data-testid={bannerBarSectionTestId || ''}
    >
      {banners.map((banner, index) => {
        return (
          <div
            key={index}
            className={banners.length - 1 != index ? `mr-[3.925rem]` : ''}
          >
            <Banner {...banner} />
          </div>
        );
      })}
    </div>
  );
};

export { Banner };
