import { BannerImageMockData } from '@root/__mock-props__/component/root/banner-bar';
import { slideCardMockData } from '@root/__mock-props__/component/root/slide-card';
import { SlideCard } from '@src/components/root';
import { Banner as BannerImage } from '@src/components/root/banner-bar';
import { IconName } from '@src/types/root/_icon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Root/SlideCard/Card',
  component: SlideCard,
  argTypes: {
    cardImg: {
      control: {
        type: 'text',
      },
    },
    cardNo: {
      control: {
        type: 'text',
      },
    },
    desc: {
      control: {
        type: 'text',
      },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof SlideCard>;

/**
 *
 * Create the Slide card's Template
 *
 *
 */

const SlideCardTemplate: ComponentStory<typeof SlideCard> = (arg) => {
  return (
    <div className={`bg-[#172029]`}>
      <div className="container ">
        <div className={`h-screen flex justify-center items-center `}>
          <div>
            <SlideCard {...arg} />
          </div>
        </div>
      </div>
    </div>
  );
};

/** Make the instance of the slide card template */
export const CardOne = SlideCardTemplate.bind({});
CardOne.args = slideCardMockData;
