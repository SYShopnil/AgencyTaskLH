import { ISlideCard } from '@src/types/root';
import Image from 'next/image';
import React from 'react';
import ModuleStyleSheet from './slide-card.module.scss';

export const SlideCard = ({
  cardImg,
  cardNo,
  desc,
  heading,
  isActive,
  slideCardDataTestId,
}: ISlideCard) => {
  return (
    <div
      className={`grid grid-cols-12 bg-[#172029] !py-[7.5rem] !px-[5rem] !rounded-[2.5rem]  border-solid border mainWrapper ${
        ModuleStyleSheet['borderStyle']
      } ${isActive && ModuleStyleSheet['active']} ${
        ModuleStyleSheet['mainWrapper']
      } `}
      data-testid={slideCardDataTestId || 'slideCardTestIdOne'}
    >
      {/* left section wrapper */}
      <div className={`col-span-7 mr-[7.75rem]`}>
        <div className={`mb-[1.5rem]`}>
          <p className={`text-[#D3F699] text-3xl`}>{cardNo}</p>
        </div>
        <div className={`mb-[1.5rem]`}>
          <p className={`text-primary_500 text-2xl`}>{heading}</p>
        </div>
        <div>
          <p className={`text-[#FEFEFE] text-lg`}>{desc}</p>
        </div>
      </div>

      {/* right section wrapper */}
      <div className={`col-span-5 flex justify-center items-center`}>
        <div>
          <Image
            src={cardImg}
            alt="Picture of the author"
            width={490}
            height={559}
          />
        </div>
      </div>
    </div>
  );
};
