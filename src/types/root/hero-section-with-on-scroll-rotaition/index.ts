export interface IHeroSectionWithOnScrollRotation {
  imgURL: string;
  onAppearPosition: number; //this would be between 0 and 1
  isTriggerOnce: boolean;
  heroSectionRotationDataTestId?: string;
}
