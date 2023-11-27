import { IFooter } from '@src/types/root';
import { IconName } from '@src/types/root/_icon';

export const footerMockData: IFooter = {
  sectionOne: {
    companyName: 'abc',
    logo: IconName.Logo,
    year: '2023',
  },
  sectionThree: {
    socialMediaLink: [
      {
        isOpenNewTab: true,
        link: '',
        name: 'Facebook',
      },
      {
        isOpenNewTab: true,
        link: '',
        name: 'Twitter',
      },
      {
        isOpenNewTab: true,
        link: '',
        name: 'LinkedIn',
      },
      {
        isOpenNewTab: true,
        link: '',
        name: 'Instagram',
      },
    ],
  },
  sectionTwo: {
    address: '20-22 Wenlock Road, London, N1 7GU',
    city: 'LONDON',
    contactNumber: '+44 207 1188550',
    email: 'career@lemonhive.com',
  },
  footerDataTestId: 'footerCatcher',
};
