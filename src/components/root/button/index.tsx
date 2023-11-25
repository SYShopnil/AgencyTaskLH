import {
  BtnColorSchema,
  IButton,
  INormalButton,
  IRedirectButton,
} from '@src/types/root';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import IconStore from '../_icon';
import { IconName } from '@src/types/root/_icon';

//Common layout
const BaseButton = ({ btnText, colorSchema, isArrow }: IButton) => {
  const [fillValue, setFillValue] = useState('');
  const appliedBtnMainWrapperStyle = `flex justify-center items-center `;
  const appliedBtnInnerWrapperStyle = `text-base_2  flex justify-center items-center px-[1.5rem] py-[1rem] rounded-primary`;
  let appliedBtnBgColorStyle = '';

  const setRootFillValue = {
    initial: '',
    onHover: '',
  };
  switch (colorSchema) {
    case BtnColorSchema.TransparentBgTextPrimary500: {
      appliedBtnBgColorStyle = `bg-[transparent] hover:bg-primary_500 duration-[0.5s] text-primary_500 hover:text-neutral_500 border-[0.063rem] border-primary_500`;
      setRootFillValue['initial'] = '#90E900';
      setRootFillValue['onHover'] = '#1E2A37';
      break;
    }

    case BtnColorSchema.SolidBgPrimary500TextNeutral500: {
      appliedBtnBgColorStyle = `bg-primary_500 hover:bg-[transparent]  duration-[0.5s] text-neutral_500 hover:text-primary_500  border-[0.063rem] border-primary_500`;
      setRootFillValue['onHover'] = '#90E900';
      setRootFillValue['initial'] = '#1E2A37';
      break;
    }
    case BtnColorSchema.SolidBgPrimary300TextNeutral500: {
      appliedBtnBgColorStyle = `bg-primary_300 hover:bg-[transparent]  duration-[0.5s] text-neutral_500 hover:text-primary_300  border-[0.063rem] border-primary_300`;
      setRootFillValue['onHover'] = '#90E900';
      setRootFillValue['initial'] = '#1E2A37';
      break;
    }
    case BtnColorSchema.SolidPrimaryGradientTextNeutral500: {
      appliedBtnBgColorStyle = `bg-primaryGradient hover:bg-none  duration-[0.5s] text-neutral_500 hover:text-primary_500  border-[0.063rem] border-primary_500`;
      setRootFillValue['onHover'] = '#90E900';
      setRootFillValue['initial'] = '#1E2A37';
      break;
    }
    case BtnColorSchema.SolidSecondary300TextNeutral500: {
      appliedBtnBgColorStyle = ` bg-secondary_300 hover:bg-[transparent]  duration-[0.5s] text-neutral_500 hover:text-secondary_300  border-[0.063rem] border-secondary_300 `;
      setRootFillValue['onHover'] = '#F5F066';
      setRootFillValue['initial'] = '#1E2A37';
      break;
    }

    default: {
      appliedBtnBgColorStyle = `bg-[transparent] hover:bg-primary_500 duration-[0.5s] text-primary_500 hover:text-neutral_500 border-[0.063rem] border-primary_500`;
    }
  }

  // handle the first time arrow initialize
  useEffect(() => {
    setFillValue(setRootFillValue['initial']);
  }, []);

  return (
    // button main wrapper
    <span
      className={`${appliedBtnMainWrapperStyle} `}
      onMouseEnter={() => setFillValue(setRootFillValue.onHover)}
      onMouseLeave={() => setFillValue(setRootFillValue.initial)}
    >
      <span
        className={`${appliedBtnInnerWrapperStyle}  ${appliedBtnBgColorStyle}  w-[100%] h-[100%]`}
      >
        <span>{btnText}</span>
        {/* btn text part wrapper */}
        {isArrow && (
          <span className={`ml-[1rem] h-[1.5rem] w-[1.5rem] inline-block `}>
            <IconStore iconName={IconName.Arrow} fill={fillValue} />
          </span>
        )}
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
