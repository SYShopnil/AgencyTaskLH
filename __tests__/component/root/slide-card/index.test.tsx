/** TO DO
 *
 *
 *
 */

import { BannerBarSectionMockData } from '@root/__mock-props__/component/root/banner-bar';
import { slideCardMockData } from '@root/__mock-props__/component/root/slide-card';
import { BannerSectionBar, SlideCard } from '@src/components/root';
import { render } from '@testing-library/react';

/** Done
 *
 * Take Snapshot of slide card component
 *
 */

describe('When Slide Card has been rendered', () => {
  it(`Expect Successfully Rendered`, () => {
    const { getByTestId } = render(<SlideCard {...slideCardMockData} />);
    const catchMainWrapperElement = getByTestId(
      slideCardMockData.slideCardDataTestId || 'slideCardTestIdOne'
    );
    expect(catchMainWrapperElement).toBeInTheDocument();
    expect(catchMainWrapperElement).toMatchSnapshot();
  });
});
