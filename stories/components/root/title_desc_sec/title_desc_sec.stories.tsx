import { title_desc_sec_mock } from '@root/__mock-props__/component/root/title_desc_sec';
import { TitleDescSection } from '@src/components/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Root/Title_Desc_Sec',
  component: TitleDescSection,
  argsType: {
    desc: {
      control: 'text',
      require: true,
    },
    title: {
      control: 'text',
      require: true,
    },
  },
} as ComponentMeta<typeof TitleDescSection>;

const TitleDescSectionTemplate: ComponentStory<typeof TitleDescSection> = (
  args
) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <TitleDescSection {...args} />
        </div>
      </div>
    </div>
  );
};

export const TitleDescSectionDemo = TitleDescSectionTemplate.bind({});

TitleDescSectionDemo.args = title_desc_sec_mock;
