import { footerMockData } from '@root/__mock-props__/component/root/footer';
import Footer from '@src/components/root/footer';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Root/Footer/Demo',
  component: Footer,
  argTypes: {
    sectionOne: {
      control: {
        type: 'object',
      },
    },
    sectionTwo: {
      control: {
        type: 'object',
      },
    },
    sectionThree: {
      control: {
        type: 'object',
      },
    },
  },
} as ComponentMeta<typeof Footer>;

/**
 *
 * Footer Template
 *
 */
const FooterTemplate: ComponentStory<typeof Footer> = (arg) => {
  return (
    <div className="container bg-neutral_500">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <Footer {...arg} />
        </div>
      </div>
    </div>
  );
};

/**
 *
 * Footer Demos
 *
 */
export const FooterDemo = FooterTemplate.bind({});
FooterDemo.args = footerMockData;
