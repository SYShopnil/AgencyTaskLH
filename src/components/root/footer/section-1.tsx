import { IFooter } from '@src/types/root';
import React from 'react';
import IconStore from '../_icon';

type sectionOne = Pick<IFooter, 'sectionOne'>;

export const SectionOne = ({
  sectionOne: { companyName, logo, year },
}: sectionOne) => {
  return (
    <div className={`space-y-[2.5rem]`}>
      <div className={`w-[9.116rem] h-[5rem] fill-primary_500`}>
        <IconStore iconName={logo} />
      </div>
      <div className={`text-[1.25rem] `}>
        <p className={`text-[#FEFEFE]`}>
          @ {year}
          <span className={`text-primary_500`}> {companyName}. </span>All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
