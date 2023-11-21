import {
  BtnColorSchema,
  IButton,
  INormalButton,
  IRedirectButton,
} from '@src/types/root';
import Link from 'next/link';
import React from 'react';
import IconStore from '../_icon';
import { IconName } from '@src/types/root/_icon';

//Common layout
const BaseButton = ({ btnText, colorSchema }: IButton) => {
  /**Not fixed */
  // const appliedBtnMainWrapperStyle = `flex justify-center items-center w-[12.125rem] md:w-[16.875rem] h-[3rem] md:h-[3.5rem] `;
  const appliedBtnMainWrapperStyle = `flex justify-center items-center `;
  const appliedBtnInnerWrapperStyle = `text-sm md:text-lg flex justify-center items-center px-[1.5rem] md:px-[2rem] py-[1rem]`;

  let appliedBtnBgColorStyle = '';
  switch (colorSchema) {
    case BtnColorSchema.BlackBgTextWhite: {
      appliedBtnBgColorStyle = ` bg-[#FFCB05] hover:bg-[#daa208] duration-[0.5s] text-[#FFFF]`;
      break;
    }
    default: {
      appliedBtnBgColorStyle = `bg-[#FFCB05] hover:bg-[#daa208] duration-[0.5s] text-[#FFFF]`;
    }
  }

  return (
    // button main wrapper
    <span className={`${appliedBtnMainWrapperStyle} `}>
      <span
        className={`${appliedBtnInnerWrapperStyle} ${appliedBtnBgColorStyle}`}
      >
        {/* btn text part wrapper */}
        <span className={`mr-[0.625rem]`}>
          <IconStore iconName={IconName.AiTwotoneHome} />
        </span>
        <span>{btnText}</span>
      </span>
    </span>
  );
};

//Normal Button
const Button = (props: INormalButton) => {
  return (
    <span
      onClick={(
        e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
      ) => props.clickHandler?.(e)}
      data-testid={props.dataTestId}
    >
      <BaseButton {...props} />
    </span>
  );
};

//Redirect Button
Button.RedirectButton = (props: IRedirectButton) => {
  return (
    <Link href={props.redirectLink} passHref>
      <a
        target={props.isOpenNewTab ? '_blank' : '_self'}
        data-testid={props.dataTestId}
      >
        <BaseButton {...props} />
      </a>
    </Link>
  );
};
export default Button;
