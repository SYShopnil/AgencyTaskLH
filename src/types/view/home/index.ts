import {
  IHeader,
  IHeroWithOnScrollRotation,
  IPartnerSection,
} from '@src/types/compound';
import { IVerticalCarouselSectionMain } from '@src/types/compound/vertical-slider-section';
import { IFooter } from '@src/types/root';

export interface IHomePage {
  footerElement: IFooter;
  headerElement: IHeader;
  sectionElements: {
    sectionOne: IHeroWithOnScrollRotation;
    sectionTwo: IPartnerSection;
    sectionThree: IVerticalCarouselSectionMain;
  };
}
