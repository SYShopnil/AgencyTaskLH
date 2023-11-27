import { HeaderMockData } from '@root/__mock-props__/component/compound/header';
import { footerMockData } from '@root/__mock-props__/component/root/footer';
import { Header } from '@src/components/compound/header';
import Footer from '@src/components/root/footer';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Compound/Header/Demo',
  component: Header,
} as ComponentMeta<typeof Header>;

/**
 *
 * Header Template
 *
 */
const HeaderTemplate: ComponentStory<typeof Header> = (arg) => {
  return (
    <div className=" bg-neutral_500 h-screen">
      <div className={`container`}>
        <Header {...arg} />
      </div>
    </div>
  );
};

/**
 *
 * Header Demos
 *
 */
export const HeaderDemo = HeaderTemplate.bind({});
HeaderDemo.args = HeaderMockData;
