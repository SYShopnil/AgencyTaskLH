import { HeaderMockData } from '@root/__mock-props__/component/compound/header';
import { Header } from '@src/components/compound/header';
import { render } from '@testing-library/react';

describe('When Header has been load', () => {
  it('Expect it will render successfully', () => {
    const { getByTestId } = render(<Header {...HeaderMockData} />);
    const catchTheCard = getByTestId(
      HeaderMockData?.dataTestId || 'headerCatchy'
    );
    expect(catchTheCard).toBeInTheDocument();
    expect(catchTheCard).toMatchSnapshot();
  });
});
