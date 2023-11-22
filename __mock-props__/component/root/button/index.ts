import { BtnColorSchema, IRedirectButton } from '@src/types/root';

export const mock_data_redirectButton: IRedirectButton[] = [
  {
    btnText: 'Button Link',
    colorSchema: BtnColorSchema.SolidBgPrimary300TextNeutral500,
    isOpenNewTab: true,
    redirectLink: 'https://chat.openai.com/',
    dataTestId: 'Redirect Button One',
    isArrow: true,
  },
  {
    btnText: 'Back to Homepage Two',
    colorSchema: BtnColorSchema.TransparentBgTextPrimary500,
    isOpenNewTab: false,
    redirectLink: '',
    dataTestId: 'Redirect Button Two',
    isArrow: false,
  },
];
