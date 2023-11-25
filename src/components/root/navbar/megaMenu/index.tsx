import { IMegaMenu, IconEnums } from '@src/types/root';
import React, { useState } from 'react';
import OnHoverVisibleSection from './onApearVIsualPart';
import ModuleStyle from './index.module.scss';
import IconStore from '../../_icon';

export const MegaMenu = ({ commonPart, menuItems }: IMegaMenu) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const onMouseEnterHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ind: number
  ) => {
    e.preventDefault();
    setActiveItem(ind);
  };
  const onMouseLeaveHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ind: number
  ) => {
    e.preventDefault();
  };
  return (
    <div
      className={`grid grid-cols-12 gap-2 bg-neutral_500 p-4 rounded-[1.25rem] duration-75 `}
    >
      {/* menu items wrapper */}
      <div
        className={`col-span-3 pr-2 pl-4 py-4 bg-[#172029] rounded-[0.625rem]`}
      >
        {menuItems.map((item, ind) => {
          return (
            // item wrapper
            <div
              key={ind}
              className={` my-2 py-3 px-4 rounded-lg ${
                ModuleStyle[`activeItemWrapper`]
              } cursor-pointer ${activeItem == ind && ModuleStyle['active']}`}
              onMouseEnter={(e) => onMouseEnterHandler(e, ind)}
              onMouseLeave={(e) => onMouseLeaveHandler(e, ind)}
            >
              <span
                className={`fill-[#D3F699] hidden ${
                  activeItem == ind && ModuleStyle['activeArrowWrapper']
                }`}
              >
                <IconStore iconName={IconEnums.TrapeziumArrow} />
              </span>
              {/* each items heading and sub heading wrapper */}
              <span className={`${ModuleStyle[`activeItemParagraphWrapper`]} `}>
                <p className={`text-[1rem]  text-[#FEFEFE]`}>{item.heading}</p>
                <p className={`text-sm text-[#FEFEFE] `}>{item.subHeading}</p>
              </span>
            </div>
          );
        })}
      </div>
      {/* on hover appear part wrapper */}
      <div className={`col-span-9`}>
        {menuItems.map((item, ind) => {
          item.contents;
          return (
            <>
              {ind == activeItem && (
                <div className={`duration-[0.5s] `}>
                  <OnHoverVisibleSection
                    commonSection={commonPart}
                    menuItems={item.contents}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
