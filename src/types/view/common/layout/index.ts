import { IHeader } from '@src/types/compound';
import { IFooter } from '@src/types/root';

export interface ICommonLayout {
  children: React.ReactElement;
  headerElements: IHeader;
  footerElement: IFooter;
}
