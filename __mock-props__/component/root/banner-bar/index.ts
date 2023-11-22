import { IBanner, IBannerSectionBar } from '@src/types/root';
import { IconName } from '@src/types/root/_icon';

export const BannerImageMockData: IBanner[] = [
  {
    iconName: IconName.Treva,
    clickableLink: 'https://www.youtube.com/',
  },
  {
    iconName: IconName.Treva,
    clickableLink: 'https://www.youtube.com/',
  },
  {
    iconName: IconName.Treva,
    clickableLink: 'https://www.youtube.com/',
  },
  {
    iconName: IconName.Treva,
    clickableLink: 'https://www.youtube.com/',
  },
  {
    iconName: IconName.Treva,
    clickableLink: 'https://www.youtube.com/',
  },
];

export const BannerBarSectionMockData: IBannerSectionBar = {
  contents: BannerImageMockData,
  bannerBarSectionTestId: 'mainWrapper',
};
