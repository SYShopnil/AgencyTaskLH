import { BannerSectionBar } from '@src/components/root/banner-bar';
import { IPartnerSection } from '@src/types/compound';
import React from 'react';

export const PartnerSection = ({ banners, heading }: IPartnerSection) => {
  return (
    <div className={`space-y-[3rem]`} data-testid={'partner-section-catch-id'}>
      <div>
        <h1 className={`text-center text-lg text-primary_500`}>{heading}</h1>
      </div>
      <div className={`flex justify-center items-center`}>
        <BannerSectionBar contents={banners} />
      </div>
    </div>
  );
};
