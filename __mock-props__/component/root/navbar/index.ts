import { INavbar, ISubMenuBlock, IconEnums } from '@src/types/root';

const menuItemsDummyData: ISubMenuBlock[] = [
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable web apps',
    title: 'Progressive Web Apps',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable web apps',
    title: 'Artificial Intelligence',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable web apps',
    title: 'Progressive Web Apps',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable web apps',
    title: 'Artificial Intelligence',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable web apps',
    title: 'Progressive Web Apps',
  },
];

const menuItemsDummyDataTwo: ISubMenuBlock[] = [
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable Mobile apps',
    title: 'Progressive Mobile Apps',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable Web apps',
    title: 'Progressive Mobile Apps',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable Mobile apps',
    title: 'Progressive Mobile Apps',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable Mobile apps',
    title: 'Progressive Mobile Apps',
  },
  {
    iconName: IconEnums.NavIconOne,
    link: 'https://www.facebook.com/',
    subTitle: 'Offline-capable Mobile apps',
    title: 'Progressive Mobile Apps',
  },
];

export const navBarMockData: INavbar = {
  commonPart: {
    logo: IconEnums.Logo,
    redirectLInk: 'https://www.facebook.com/',
    title: `The Best Design Agency`,
  },
  navItems: [
    {
      heading: 'Home',
      megaMenuItems: [
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
        {
          heading: 'Headless Web App',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
      ],
    },
    {
      heading: 'Services',
      megaMenuItems: [
        {
          heading: 'Hello website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless Application',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
      ],
    },
    {
      heading: 'Projects',
      megaMenuItems: [
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
      ],
    },
    {
      heading: 'Blogs',
      megaMenuItems: [
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyData,
        },
        {
          heading: 'Headless website',
          subHeading: 'Build modern, decoupled web experiences',
          contents: menuItemsDummyDataTwo,
        },
      ],
    },
  ],
  getInTouchLink: 'https://www.facebook.com/',
  dataTestId: 'navBarCatcher',
};
