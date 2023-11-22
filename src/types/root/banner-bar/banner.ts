import { IconName } from '../_icon';

export interface IBanner {
  iconName: IconName;
  clickableLink?: string;
}

export interface IBannerSectionBar {
  contents: IBanner[];
  bannerBarSectionTestId?: string;
}
