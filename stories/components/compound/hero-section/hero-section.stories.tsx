import { HeroSection } from '@src/components/compound';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Compound/HeroSection/Demo',
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>;

/**
 *
 * Hero section Template
 *
 */
const HeroSectionTemplate: ComponentStory<typeof HeroSection> = (arg) => {
  return (
    <div className=" bg-neutral_500 h-screen flex justify-center items-center">
      <div className={`container `}>
        <HeroSection />
      </div>
    </div>
  );
};

/**
 *
 * Hero section Demos
 *
 */
export const HeaderDemo = HeroSectionTemplate.bind({});
