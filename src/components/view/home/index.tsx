import React from 'react';
import { CommonLayout } from '../common/layout';
import { IHomePage } from '@src/types/view';
import { HeroSectionWithOnScrollRotation } from '@src/components/root';
import {
  HeroWithOnScrollRotation,
  PartnerSection,
} from '@src/components/compound';
import VerticalCarouselMain from '@src/components/compound/vertical-slider-section';

export const Home = ({
  footerElement,
  headerElement,
  sectionElements: { sectionOne, sectionTwo, sectionThree },
}: IHomePage) => {
  return (
    <div className={`flex justify-center bg-neutral_500 w-[100%]`}>
      <CommonLayout
        footerElement={footerElement}
        headerElements={headerElement}
      >
        <>
          <section>
            <HeroWithOnScrollRotation {...sectionOne} />
          </section>
          <section className={`my-[7.5rem]`}>
            <PartnerSection {...sectionTwo} />
          </section>
          <section>
            <VerticalCarouselMain {...sectionThree} />
          </section>
        </>
      </CommonLayout>
    </div>
  );
};
