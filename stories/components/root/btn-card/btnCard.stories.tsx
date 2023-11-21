import { btnCardMockProps } from '@root/__mock-props__/component/root/btn-card';
import BtnCard from '@src/components/root/btn-card';
import { CardSize, ColorSchema } from '@src/types/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Root/BtnCards',
  component: BtnCard,
  argTypes: {
    title: {
      control: 'text',
    },
    colorSchema: {
      control: {
        type: 'select',
      },
      options: [...Object.keys(ColorSchema)],
    },
    cardSize: {
      control: 'select',
      options: [...Object.keys(CardSize)],
    },
    fill: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} as ComponentMeta<typeof BtnCard>;

const BtnCardTemplate: ComponentStory<typeof BtnCard> = (args) => {
  return (
    <div className={`container flex justify-center items-center h-screen`}>
      <BtnCard {...args} />
    </div>
  );
};

export const BtnCardVariantOne = BtnCardTemplate.bind({});
BtnCardVariantOne.args = btnCardMockProps[0];
