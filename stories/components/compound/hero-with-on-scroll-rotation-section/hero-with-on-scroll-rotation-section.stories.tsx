import { hero_with_on_scroll_rotation_section_mockData } from '@root/__mock-props__/component/compound/hero-with-on-scroll-rotation-section';
import {
  HeroSection,
  HeroWithOnScrollRotation,
} from '@src/components/compound';
import {} from '@src/components/compound';
import { HeroSectionWithOnScrollRotation } from '@src/components/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Compound/HeroSection/WithRotationScroll',
  component: HeroWithOnScrollRotation,
} as ComponentMeta<typeof HeroSectionWithOnScrollRotation>;

/**
 *
 * Hero section with on scroll rotation Template
 *
 */
const HeroSectionTemplate: ComponentStory<typeof HeroWithOnScrollRotation> = (
  arg
) => {
  return (
    <div className=" bg-neutral_500 ">
      <div className={`container `}>
        <HeroWithOnScrollRotation {...arg} />
      </div>
    </div>
  );
};

/**
 *
 * Hero section with on scroll rotation
 *
 */
export const HeaderWithOnScrollRotationDemo = HeroSectionTemplate.bind({});
HeaderWithOnScrollRotationDemo.args =
  hero_with_on_scroll_rotation_section_mockData;
