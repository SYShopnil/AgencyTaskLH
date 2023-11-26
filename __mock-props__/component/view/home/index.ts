import { IHomePage } from '@src/types/view';
import { footerMockData } from '../../root/footer';
import { HeaderMockData } from '../../compound/header';
import { HeroWithOnScrollRotation } from '@src/components/compound';
import { hero_with_on_scroll_rotation_section_mockData } from '../../compound/hero-with-on-scroll-rotation-section';
import { partnerSectionMockData } from '../../compound/partner-section';

export const homePageMockData: IHomePage = {
  footerElement: footerMockData,
  headerElement: HeaderMockData,
  sectionElements: {
    sectionOne: hero_with_on_scroll_rotation_section_mockData,
    sectionTwo: partnerSectionMockData,
  },
};
