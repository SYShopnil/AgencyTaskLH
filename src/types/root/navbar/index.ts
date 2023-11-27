import { IconEnums } from '..';

export interface ISubMenuBlock {
  iconName: IconEnums;
  title: string;
  subTitle: string;
  link: string;
}

export interface IMegaMenuItems {
  heading: string;
  subHeading: string;
  contents: ISubMenuBlock[];
}

export interface ICommonSection {
  logo: IconEnums.Logo;
  title: string;
  redirectLInk: string;
}

export interface IMegaMenu {
  menuItems: IMegaMenuItems[];
  commonPart: ICommonSection;
}

interface INavbarItems {
  heading: string;
  megaMenuItems: IMegaMenuItems[];
}
export interface INavbar {
  navItems: INavbarItems[];
  commonPart: ICommonSection;
  getInTouchLink: string;
  dataTestId?: string;
}
