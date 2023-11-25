import { Navbar } from '@src/components/root';
import IconStore from '@src/components/root/_icon';
import { IHeader } from '@src/types/compound';
import { INavbar, IconEnums } from '@src/types/root';
import React from 'react';

export const Header = ({
  logo,
  navBarData: { commonPart, getInTouchLink, navItems },
  dataTestId,
}: IHeader) => {
  return (
    <div
      className={`grid grid-cols-12 gap-[5rem]`}
      data-testid={dataTestId || 'headerCatchy'}
    >
      <div className={`w-[6.837rem] h-[3.75rem] fill-primary_500 col-span-2`}>
        <IconStore iconName={logo} />
      </div>
      <div className={`col-span-10`}>
        <Navbar
          commonPart={commonPart}
          getInTouchLink={getInTouchLink}
          navItems={navItems}
        />
      </div>
    </div>
  );
};
