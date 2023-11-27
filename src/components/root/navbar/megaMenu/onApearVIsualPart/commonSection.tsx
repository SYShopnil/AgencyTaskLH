import { BtnColorSchema, ICommonSection } from '@src/types/root';
import React from 'react';
import IconStore from '../../../_icon';
import Button from '../../../button';

export const CommonSection = ({
  logo,
  title,
  redirectLInk,
}: ICommonSection) => {
  const btnText = 'Work With Arrioo';
  return (
    <div className={`space-y-[2.5rem]`}>
      <div className={`bg-primary_500 rounded-2xl`}>
        <div className={`p-[2.5rem]`}>
          <div
            className={`!fill-[#172029] flex justify-center items-center space-y-[1.5rem]`}
          >
            <div className={`w-[9.116rem] h-[5rem]`}>
              <IconStore iconName={logo} />
            </div>
          </div>
          <div>
            <p className={`text-[#17202] text-lg text-center`}>{title}</p>
          </div>
        </div>
      </div>
      <div>
        <Button.RedirectButton
          btnText={btnText}
          colorSchema={BtnColorSchema.TransparentBgTextPrimary500}
          isArrow={false}
          isOpenNewTab={true}
          redirectLink={redirectLInk}
        />
      </div>
    </div>
  );
};
