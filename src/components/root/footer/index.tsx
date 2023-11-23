import { IFooter, IconEnums } from '@src/types/root';
import React from 'react';
import { SectionOne } from './section-1';
import { SectionTwo } from './section-2';
import { SectionThree } from './section-3';

const Footer = ({
  sectionOne,
  sectionThree,
  sectionTwo,
  footerDataTestId,
}: IFooter) => {
  return (
    <div className={`grid grid-cols-12`} data-testid={footerDataTestId}>
      <div className={`col-span-6`}>
        <SectionOne sectionOne={sectionOne} />
      </div>
      <div className={`col-span-3`}>
        <SectionTwo sectionTwo={sectionTwo} />
      </div>
      <div className={`col-span-3`}>
        <SectionThree sectionThree={sectionThree} />
      </div>
    </div>
  );
};

export default Footer;
