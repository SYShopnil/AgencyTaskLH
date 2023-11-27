import { BannerBarSectionMockData } from '@root/__mock-props__/component/root/banner-bar';
import {
  Banner as BannerImage,
  BannerSectionBar,
} from '@src/components/root/banner-bar';
import { IconName } from '@src/types/root/_icon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Root/Banner-Bar/Section',
  component: BannerSectionBar,
} as ComponentMeta<typeof BannerSectionBar>;

/**
 *
 * Create the Banner section Template
 *
 *
 */

const BannerBarSectionTemplate: ComponentStory<typeof BannerSectionBar> = (
  arg
) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <BannerSectionBar {...arg} />
        </div>
      </div>
    </div>
  );
};

/** Make the instance of the banner image template */
export const SectionExampleOne = BannerBarSectionTemplate.bind({});
SectionExampleOne.args = BannerBarSectionMockData;
