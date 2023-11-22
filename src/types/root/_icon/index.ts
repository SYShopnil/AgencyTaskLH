export enum IconName {
  AiTwotoneHome = 'AiTwotoneHome', //out of this application
  Logo = 'Logo',
  Aven = 'Aven',
  CodeLab = 'CodeLab',
  FoxHub = 'FoxHub',
  Rectangle = 'Rectangle',
  Treva = 'Treva',
  Arrow = 'Arrow',
}

export interface IIconStore {
  iconName: IconName;
  fill?: string;
}
