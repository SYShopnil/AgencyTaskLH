import { IconEnums } from '@src/types/root';
import React from 'react';
import { CommonSection } from './commonSection';
import { SubMenuBlock } from './subMenuBlock';
import ModuleStyle from '../index.module.scss';

//copy from child
interface ICommonSection {
  logo: IconEnums.Logo;
  title: string;
  redirectLInk: string;
}

//copy from child
interface ISubMenuBlock {
  iconName: IconEnums;
  title: string;
  subTitle: string;
  link: string;
}

//totally new
interface IOnHoverVisibleSection {
  menuItems: ISubMenuBlock[];
  commonSection: ICommonSection;
}

const OnHoverVisibleSection = ({
  commonSection,
  menuItems,
}: IOnHoverVisibleSection) => {
  return (
    <div className={`rounded-[0.625rem] bg-[#172029] `}>
      <div
        className={`duration-[0.5s] grid grid-cols-12 gap-[1.5rem] p-[1rem] `}
      >
        {/* menu items wrapper */}
        <div className={`col-span-7`}>
          {menuItems.map((item, ind) => {
            return (
              <div key={ind}>
                <SubMenuBlock {...item} />
              </div>
            );
          })}
        </div>
        {/* common part wrapper */}
        <div className={`col-span-5`}>
          <CommonSection {...commonSection} />
        </div>
      </div>
    </div>
  );
};

export default OnHoverVisibleSection;
// ${ModuleStyle['activeOneHoverVisibleSectionAnimation']} ${ModuleStyle['keyFrameTopToBottom']}
