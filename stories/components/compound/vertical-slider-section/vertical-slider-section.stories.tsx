import { verticalSliderSectionMockData } from '@root/__mock-props__/component/compound/veticla-slider-section';
import VerticalCarouselMain from '@src/components/compound/vertical-slider-section';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Compound/VerticalCarousal/Demo',
  component: VerticalCarouselMain,
} as ComponentMeta<typeof VerticalCarouselMain>;

/**
 *
 * VerticalCarouselMain section Template
 *
 */
const VerticalCarousalTemplate: ComponentStory<typeof VerticalCarouselMain> = (
  arg
) => {
  return (
    <div className=" bg-neutral_500 h-auto ">
      <div className={`container `}>
        <VerticalCarouselMain {...arg} />
      </div>
    </div>
  );
};

/**
 *
 * VerticalCarouselMain section Demos
 *
 */
export const VerticalCarousalDemo = VerticalCarousalTemplate.bind({});
VerticalCarousalDemo.args = verticalSliderSectionMockData;
