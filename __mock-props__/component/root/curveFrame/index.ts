import { CurveFrameVariantEnum, ICurveFrame } from '@src/types/root';

export const mockPropsOfCurveFrame: ICurveFrame[] = [
  {
    variant: CurveFrameVariantEnum.with_gradient,
    children: `<div}>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
            </div>`,
    dataTestIdForCurveFrame: 'frameCurveOne',
    borderWidth: '2%',
  },
  {
    variant: CurveFrameVariantEnum.with_out_gradient,
    children: `<div}>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
            </div>`,
    dataTestIdForCurveFrame: 'frameCurveTwo',
    borderWidth: '2%',
  },
];
