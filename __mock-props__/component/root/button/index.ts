import { BtnColorSchema, IRedirectButton } from '@src/types/root';

export const mock_data_redirectButton: IRedirectButton[] = [
  {
    btnText: 'Back to Homepage',
    colorSchema: BtnColorSchema.BlackBgTextWhite,
    isOpenNewTab: true,
    redirectLink: 'https://chat.openai.com/',
    dataTestId: 'Redirect Button One',
  },
  {
    btnText: 'Back to Homepage Two',
    colorSchema: BtnColorSchema.BlackBgTextWhite,
    isOpenNewTab: false,
    redirectLink: '',
    dataTestId: 'Redirect Button Two',
  },
];
