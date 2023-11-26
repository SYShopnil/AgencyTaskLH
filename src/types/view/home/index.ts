import {
  IHeader,
  IHeroWithOnScrollRotation,
  IPartnerSection,
} from '@src/types/compound';
import { IFooter } from '@src/types/root';

export interface IHomePage {
  footerElement: IFooter;
  headerElement: IHeader;
  sectionElements: {
    sectionOne: IHeroWithOnScrollRotation;
    sectionTwo: IPartnerSection;
    sectionThree?: any; //not complete yet so that type was not declare
  };
}
