import { INavbar, IconEnums } from '@src/types/root';

export interface IHeader {
  navBarData: INavbar;
  logo: IconEnums.Logo;
  dataTestId?: string;
}
