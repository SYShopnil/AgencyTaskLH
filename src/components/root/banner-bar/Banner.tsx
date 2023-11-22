import React from 'react';
import IconStore from '../_icon';
import { IBanner } from '@src/types/root';

const Banner = ({ iconName, clickableLink }: IBanner) => {
  return (
    <div
      className={`inline-block fill-[#EAECED] hover:fill-primary_500 duration-[0.5s]`}
    >
      <a
        href={clickableLink || '/'}
        target="_blank"
        className={`cursor-pointer`}
      >
        <IconStore iconName={iconName} />
      </a>
    </div>
  );
};

export default Banner;
