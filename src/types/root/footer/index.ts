import { IconEnums } from '..';

export interface IFooter {
  sectionOne: {
    logo: IconEnums.Logo;
    companyName: string;
    year: string | number;
  };
  sectionTwo: {
    city: string;
    address: string;
    contactNumber: string;
    email: string;
  };
  sectionThree: {
    socialMediaLink: {
      name: string;
      link: string;
      isOpenNewTab: boolean;
    }[];
  };
  footerDataTestId?: string;
}
