import { mockPropsOfCurveFrame } from '@root/__mock-props__/component/root/curveFrame';
import CurveFrame from '@src/components/root/curveFrame';
import { CurveFrameVariantEnum } from '@src/types/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/root/curveFrame',
  component: CurveFrame,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [...Object.keys(CurveFrameVariantEnum)],
    },
  },
} as ComponentMeta<typeof CurveFrame>;

const CurveFrameTemplate: ComponentStory<typeof CurveFrame> = (arg) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <CurveFrame {...arg}>
          <div className={`w-[22.813rem] min-h-[15.813rem]`}>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
          </div>
        </CurveFrame>
      </div>
    </div>
  );
};

export const CurveFrameDemoOne = CurveFrameTemplate.bind({});
CurveFrameDemoOne.args = mockPropsOfCurveFrame[0];
