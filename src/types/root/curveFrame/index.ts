import { ReactNode } from 'react';

export enum CurveFrameVariantEnum {
  with_out_gradient = 'with_out_gradient',
  with_gradient = 'with_gradient',
}

export interface ICurveFrame {
  children: ReactNode;
  variant?: CurveFrameVariantEnum;
  dataTestIdForCurveFrame?: string;
  borderWidth: string;
}
