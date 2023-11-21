export enum ColorSchema {
  PrimaryYellowBgTextWhite = 'PrimaryYellowBgTextWhite',
  PrimaryBlueBgTextWhite = 'PrimaryBlueBgTextWhite',
  SecondaryLightGreenBgTextWhite = 'SecondaryLightGreenBgTextWhite',
  SecondaryLightVioletBgTextWhite = 'SecondaryLightVioletBgTextWhite',
  SecondaryOrangeBgTextWhite = 'SecondaryOrangeBgTextWhite',
  SecondaryPinkBgTextWhite = 'SecondaryPinkBgTextWhite',
  SecondaryBlueBgTextWhite = 'SecondaryBlueBgTextWhite',
  SecondaryDeepGreenBgTextWhite = 'SecondaryDeepGreenBgTextWhite',
  AccentGrayBgTextWhite = 'AccentGrayBgTextWhite',
  AccentBlackBgTextWhite = 'AccentBlackBgTextWhite',
  LightBlueBgTextWhite = 'LightBlueBgTextWhite',
}

export enum CardSize {
  card_sm = 'card_sm',
  card_lg = 'card_lg',
}
export interface IBtnCard {
  title: string;
  colorSchema: ColorSchema;
  cardSize: CardSize;
  fill?: number;
  data_test_id?: string;
}
