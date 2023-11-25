import { partnerSectionMockData } from '@root/__mock-props__/component/compound/partner-section';
import { HeroSection, PartnerSection } from '@src/components/compound';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Compound/PartnerSection/Demo',
  component: PartnerSection,
} as ComponentMeta<typeof PartnerSection>;

/**
 *
 * Partner section Template
 *
 */
const PartnerSectionTemplate: ComponentStory<typeof PartnerSection> = (arg) => {
  return (
    <div className=" bg-neutral_500 h-screen flex justify-center items-center">
      <div className={`container `}>
        <PartnerSection {...arg} />
      </div>
    </div>
  );
};

/**
 *
 * Partner section Demos
 *
 */
export const PartnerSectionDemo = PartnerSectionTemplate.bind({});
PartnerSectionDemo.args = partnerSectionMockData;
