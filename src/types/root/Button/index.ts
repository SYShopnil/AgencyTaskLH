export enum BtnColorSchema {
  TransparentBgTextPrimary500 = 'TransparentBgTextPrimary500',
  SolidBgPrimary300TextNeutral500 = 'SolidBgPrimary500TextNeutral500',
}
export interface IButton {
  btnText: string;
  colorSchema: BtnColorSchema;
  dataTestId?: string;
  isArrow: boolean;
}
export interface INormalButton extends IButton {
  clickHandler?: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
}
export interface IRedirectButton extends IButton {
  isOpenNewTab: boolean;
  redirectLink: string;
}
