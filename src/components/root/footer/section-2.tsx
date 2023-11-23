import { IFooter } from '@src/types/root';
import React from 'react';

type typeSectionTwo = Pick<IFooter, 'sectionTwo'>;

export const SectionTwo = ({
  sectionTwo: { address, city, contactNumber, email },
}: typeSectionTwo) => {
  return (
    <div className={`text-[1.25rem] `}>
      <p className={`text-secondary_500 mb-[0.5rem]`}>{city}</p>
      <p className={`text-[#FEFEFE]`}>{address}</p>
      <p className={`text-primary_500 my-[1.5rem]`}>{contactNumber}</p>
      <p className={`text-[#FEFEFE]`}>{email}</p>
    </div>
  );
};
