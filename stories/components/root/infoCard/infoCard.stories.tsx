import { mock_data_infoCard } from '@root/__mock-props__/component/root/infoCard';
import { InfoCard } from '@src/components/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Root/InfoCard',
  component: InfoCard,
  argTypes: {
    abilities: {
      control: 'text',
      required: true,
    },
    category: {
      control: 'text',
      required: true,
    },
    height: {
      control: 'text',
      required: true,
    },
    weight: {
      control: 'text',
      required: true,
    },
  },
} as ComponentMeta<typeof InfoCard>;

const InfoCardTemplate: ComponentStory<typeof InfoCard> = (arg) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <InfoCard {...arg} />
        </div>
      </div>
    </div>
  );
};

export const InfoCardDemoOne = InfoCardTemplate.bind({});
InfoCardDemoOne.args = mock_data_infoCard;
