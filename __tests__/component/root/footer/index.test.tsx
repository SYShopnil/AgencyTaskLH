import { footerMockData } from '@root/__mock-props__/component/root/footer';
import Footer from '@src/components/root/footer';
import { render } from '@testing-library/react';

describe('When Footer has been load', () => {
  it('Expect it will render successfully', () => {
    const { getByTestId } = render(<Footer {...footerMockData} />);
    const catchTheCard = getByTestId(
      footerMockData.footerDataTestId || 'footerCatcher'
    );
    expect(catchTheCard).toBeInTheDocument();
    expect(catchTheCard).toMatchSnapshot();
  });
});
