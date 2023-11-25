import { IHeader } from '@src/types/compound';
import { IconName } from '@src/types/root/_icon';
import { navBarMockData } from '../../root/navbar';

export const HeaderMockData: IHeader = {
  logo: IconName.Logo,
  navBarData: navBarMockData,
  dataTestId: 'headerCatchy',
};
