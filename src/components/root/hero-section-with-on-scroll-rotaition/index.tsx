import React from 'react';
import { OnAppearSkewsAnimation } from './on-appear-animation-layout';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { IHeroSectionWithOnScrollRotation } from '@src/types/root';

export const HeroSectionWithOnScrollRotation = ({
  imgURL,
  isTriggerOnce,
  onAppearPosition,
  heroSectionRotationDataTestId,
}: IHeroSectionWithOnScrollRotation) => {
  const { ref, inView } = useInView({
    threshold: onAppearPosition,
    triggerOnce: isTriggerOnce,
  });
  return (
    <div
      ref={ref}
      data-testid={
        heroSectionRotationDataTestId || 'hero-section-rotation-test-id'
      }
    >
      <OnAppearSkewsAnimation isAppear={inView}>
        <div>
          <Image
            src={imgURL}
            alt={'Hero section image'}
            height={644}
            width={1050}
          />
        </div>
      </OnAppearSkewsAnimation>
    </div>
  );
};
