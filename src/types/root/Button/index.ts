export enum BtnColorSchema {
  BlackBgTextWhite = 'BlackBgTextWhite',
}
export interface IButton {
  btnText: string;
  colorSchema: BtnColorSchema;
  dataTestId?: string;
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
