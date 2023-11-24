export enum IconName {
  Logo = 'Logo',
  Treva = 'Treva',
  Arrow = 'Arrow',
  NavIconOne = 'NavIconOne',
  TrapeziumArrow = 'TrapeziumArrow',
}

export interface IIconStore {
  iconName: IconName;
  fill?: string;
}
