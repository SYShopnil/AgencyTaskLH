import { CardSize, ColorSchema, IBtnCard } from '@src/types/root';

export const btnCardMockProps: IBtnCard[] = [
  {
    colorSchema: ColorSchema.PrimaryBlueBgTextWhite,
    title: 'Grass',
    cardSize: CardSize.card_lg,
    fill: 65,
    data_test_id: 'btnCardOne',
  },
  {
    colorSchema: ColorSchema.PrimaryBlueBgTextWhite,
    title: 'Grass',
    cardSize: CardSize.card_sm,
    fill: 50,
    data_test_id: 'btnCardTwo',
  },
];
