/** TO DO
 *
 * Take Snapshot of banner-bar component
 *
 */

import { BannerBarSectionMockData } from '@root/__mock-props__/component/root/banner-bar';
import { BannerSectionBar } from '@src/components/root';
import { render } from '@testing-library/react';

/** Done
 *
 *
 *
 */

describe('When Banner bar section has been rendered', () => {
  it(`Expect Successfully Rendered`, () => {
    const { getByTestId } = render(
      <BannerSectionBar {...BannerBarSectionMockData} />
    );
    const catchMainWrapperElement = getByTestId(
      BannerBarSectionMockData.bannerBarSectionTestId || 'mainWrapper'
    );
    expect(catchMainWrapperElement).toBeInTheDocument();
    expect(catchMainWrapperElement).toMatchSnapshot();
  });
});
