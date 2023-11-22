export enum IconName {
  Logo = 'Logo',
  Treva = 'Treva',
  Arrow = 'Arrow',
}

export interface IIconStore {
  iconName: IconName;
  fill?: string;
}
