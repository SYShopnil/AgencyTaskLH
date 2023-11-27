import {
  IVerticalCarouselMain,
  IVerticalCarouselSectionMain,
} from '@src/types/compound/vertical-slider-section';

const slides: IVerticalCarouselMain[] = [
  {
    key: 0,
    content: {
      cardImg: '/assets/media/cardImageOne.png',
      cardNo: '01',
      desc: `Your data is organized, cleaned, and given context as we interpret
            it. Your data gains meaning through the semantic layer, making it
            simpler for business users to comprehend. We assist you in gaining a
            clear understanding of what it signifies so you can take action.`,
      heading: 'Pre-processing',
      isActive: true,
      slideCardDataTestId: 'slideCardTestIdOne',
    },
  },
  {
    key: 1,
    content: {
      cardImg: '/assets/media/cardImageTwo.png',
      cardNo: '02',
      desc: `Your data is organized, cleaned, and given context as we interpret
            it. Your data gains meaning through the semantic layer, making it
            simpler for business users to comprehend. We assist you in gaining a
            clear understanding of what it signifies so you can take action.`,
      heading: 'Pre-processing',
      isActive: true,
      slideCardDataTestId: 'slideCardTestIdOne',
    },
  },
  {
    key: 2,
    content: {
      cardImg: '/assets/media/cardImageThree.png',
      cardNo: '03',
      desc: `Your data is organized, cleaned, and given context as we interpret
            it. Your data gains meaning through the semantic layer, making it
            simpler for business users to comprehend. We assist you in gaining a
            clear understanding of what it signifies so you can take action.`,
      heading: 'Pre-processing',
      isActive: true,
      slideCardDataTestId: 'slideCardTestIdOne',
    },
  },
  {
    key: 3,
    content: {
      cardImg: '/assets/media/cardImageFour.png',
      cardNo: '04',
      desc: `Your data is organized, cleaned, and given context as we interpret
            it. Your data gains meaning through the semantic layer, making it
            simpler for business users to comprehend. We assist you in gaining a
            clear understanding of what it signifies so you can take action.`,
      heading: 'Pre-processing',
      isActive: true,
      slideCardDataTestId: 'slideCardTestIdOne',
    },
  },
  {
    key: 4,
    content: {
      cardImg: '/assets/media/cardImageFour.png',
      cardNo: '01',
      desc: `Your data is organized, cleaned, and given context as we interpret
            it. Your data gains meaning through the semantic layer, making it
            simpler for business users to comprehend. We assist you in gaining a
            clear understanding of what it signifies so you can take action.`,
      heading: 'Pre-processing',
      isActive: true,
      slideCardDataTestId: 'slideCardTestIdOne',
    },
  },
];

export const verticalSliderSectionMockData: IVerticalCarouselSectionMain = {
  slides,
};
