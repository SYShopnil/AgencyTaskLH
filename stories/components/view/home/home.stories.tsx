import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';
import { HomePage } from '@src/components/view';
import { homePageMockData } from '@root/__mock-props__/component/view/home';

export default {
  title: 'Component/View/HomePage/Demo',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

/**
 *
 * HomePage Template
 *
 */
const HomePageTemplate: ComponentStory<typeof HomePage> = (arg) => {
  return (
    <>
      <HomePage {...arg} />
    </>
  );
};

/**
 *
 * HomePage Demos
 *
 */
export const HomePageDemo = HomePageTemplate.bind({});
HomePageDemo.args = homePageMockData;
