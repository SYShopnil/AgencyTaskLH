import { BannerImageMockData } from '@root/__mock-props__/component/root/banner-bar';
import { Banner as BannerImage } from '@src/components/root/banner-bar';
import { IconName } from '@src/types/root/_icon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Root/Banner-Bar/Banners',
  component: BannerImage,
  argTypes: {
    clickableLink: {
      control: 'text',
    },
    iconName: {
      control: {
        type: 'select',
      },
      options: [...Object.values(IconName)],
    },
  },
} as ComponentMeta<typeof BannerImage>;

/**
 *
 * Create the Banner Image Template
 *
 *
 */

const BannerTemplate: ComponentStory<typeof BannerImage> = (arg) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <BannerImage {...arg} />
        </div>
      </div>
    </div>
  );
};

/** Make the instance of the banner image template */
export const BannerOne = BannerTemplate.bind({});
BannerOne.args = BannerImageMockData[0];
