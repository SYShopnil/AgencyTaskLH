import React, { useState } from 'react';
import { MegaMenu } from './megaMenu';
import { BtnColorSchema, IMegaMenuItems, INavbar } from '@src/types/root';
import Button from '../button';
import ModuleStyle from './index.module.scss';

export const Navbar = ({
  commonPart,
  navItems,
  getInTouchLink,
  dataTestId,
}: INavbar) => {
  const [activeItem, setActiveItem] = useState<number>(-1);
  const mouseOnEnterNavItemHandler = (e: any, ind: number) => {
    e.preventDefault();
    setActiveItem(ind);
  };

  const mouseOnLeaveNavItemHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setActiveItem(-1);
  };

  return (
    <nav data-testid={dataTestId || 'navBarCatcher'}>
      {/* nav bar wrapper */}
      <div
        className={`space-y-[1.375rem] relative h-[12rem] min-w-[48.75rem]`}
        onMouseLeave={(e) => mouseOnLeaveNavItemHandler(e)}
      >
        <ul className={`grid grid-cols-10 h-[3.5rem] space-x-[4.5rem]`}>
          {navItems.map((navItem, ind) => {
            return (
              <li
                key={ind}
                className={`relative col-span-2  flex justify-center items-center cursor-pointer`}
                onMouseEnter={(e) => mouseOnEnterNavItemHandler(e, ind)}
              >
                <a
                  className={`text-[1.25rem] ${
                    activeItem == ind
                      ? ModuleStyle['active']
                      : ModuleStyle['non-active']
                  }`}
                >
                  {navItem.heading}
                </a>
                <div
                  className={`${ModuleStyle['activeDot']} ${
                    activeItem == ind && ModuleStyle['show']
                  }`}
                ></div>
              </li>
            );
          })}
          <li className={`col-span-2`}>
            <span>
              <Button.RedirectButton
                btnText="Get In Touch"
                colorSchema={BtnColorSchema.TransparentBgTextPrimary500}
                isArrow={false}
                isOpenNewTab={true}
                redirectLink={getInTouchLink}
              />
            </span>
          </li>
        </ul>
        {/* mega menu wrapper */}
        <div className={`${ModuleStyle['setMegaMenuBarPosition']}`}>
          {navItems.map((navItem, ind) => {
            const { megaMenuItems } = navItem;
            return (
              <>
                {activeItem == ind && (
                  <div className={``}>
                    <MegaMenu
                      commonPart={commonPart}
                      menuItems={megaMenuItems}
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
