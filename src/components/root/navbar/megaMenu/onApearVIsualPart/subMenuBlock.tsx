import { ISubMenuBlock } from '@src/types/root';
import React from 'react';
import IconStore from '../../../_icon';
import Link from 'next/link';

export const SubMenuBlock = ({
  iconName,
  subTitle,
  title,
  link,
}: ISubMenuBlock) => {
  return (
    <div className={`grid grid-cols-12  py-[0.75rem] gap-4 w-auto h-auto`}>
      <div className={`h-[2rem] w-[2rem] col-span-1`}>
        <IconStore iconName={iconName} />
      </div>
      <div className={`col-span-11 space-y-[0.5rem] `}>
        <a
          className={`text-[1rem] text-[#FEFEFE] hover:underline hover:text-primary_500 duration-[0.2s]`}
        >
          <Link href={link} target="_blank">
            {title}
          </Link>
        </a>
        <p className={`text-sm text-[#FEFEFE]`}>{subTitle}</p>
      </div>
    </div>
  );
};
