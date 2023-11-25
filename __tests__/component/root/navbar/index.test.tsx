import { navBarMockData } from '@root/__mock-props__/component/root/navbar';
import { Navbar } from '@src/components/root';
import { render } from '@testing-library/react';

describe('When Navbar has been loaded', () => {
  it('Expect it will render successfully', () => {
    const { getByTestId } = render(<Navbar {...navBarMockData} />);
    const catchTheCard = getByTestId(
      navBarMockData?.dataTestId || 'navBarCatcher'
    );
    expect(catchTheCard).toBeInTheDocument();
    expect(catchTheCard).toMatchSnapshot();
  });
});
