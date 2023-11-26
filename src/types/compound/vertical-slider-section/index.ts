import { ISlideCard } from '@src/types/root';

export interface IVerticalCarouselMain {
  key: number;
  content: ISlideCard;
}

export interface IVerticalCarouselSectionMain {
  slides: IVerticalCarouselMain[];
}
