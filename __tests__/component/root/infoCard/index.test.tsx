import { mock_data_infoCard } from '@root/__mock-props__/component/root/infoCard';
import { InfoCard } from '@src/components/root';
import { getByTestId, render } from '@testing-library/react';

describe('When Info Card has been load', () => {
  it('Expect it will render successfully', () => {
    const { getByTestId } = render(<InfoCard {...mock_data_infoCard} />);
    const catchTheCard = getByTestId(mock_data_infoCard.dataTestId || '');
    expect(catchTheCard).toBeInTheDocument();
    expect(catchTheCard).toMatchSnapshot();
  });
});
