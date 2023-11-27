import { IHeroSectionWithOnScrollRotation } from '@src/types/root';
import React from 'react';
import { HeroSection } from '../hero-section';
import { OnScrollRotationDemoOne } from '@root/stories/components/root/hero-section-with-on-scroll-rotation/hero-section-with-on-scroll-rotation.stories';
import { HeroSectionWithOnScrollRotation } from '@src/components/root';
import { IHeroWithOnScrollRotation } from '@src/types/compound';

export const HeroWithOnScrollRotation = ({
  onScrollRotationSectionData,
}: IHeroWithOnScrollRotation) => {
  return (
    <div
      className={`space-y-[5rem]`}
      data-testid={'HeroWithOnScrollRotationCatcher'}
    >
      <div>
        <HeroSection />
      </div>
      <div className={`flex justify-center items-center`}>
        <HeroSectionWithOnScrollRotation {...onScrollRotationSectionData} />
      </div>
    </div>
  );
};
