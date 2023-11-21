import { mockPropsOfCurveFrame } from '@root/__mock-props__/component/root/curveFrame';
import CurveFrame from '@src/components/root/curveFrame';
import { render } from '@testing-library/react';

let curveTracker = 0;

describe.each(mockPropsOfCurveFrame)(
  `When curve frame has rendered`,
  (curveFrame) => {
    it(`Expect component ${++curveTracker} has rendered successfully`, () => {
      const { getByTestId } = render(
        <CurveFrame {...curveFrame}>{curveFrame.children}</CurveFrame>
      );
      const getCurveFrame = getByTestId(
        curveFrame.dataTestIdForCurveFrame || ''
      );
      expect(getCurveFrame).toBeInTheDocument();
      expect(getCurveFrame).toMatchSnapshot();
    });
  }
);
