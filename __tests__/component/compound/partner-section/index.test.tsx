import { partnerSectionMockData } from '@root/__mock-props__/component/compound/partner-section';
import { HeroSection, PartnerSection } from '@src/components/compound';
import { render } from '@testing-library/react';

describe('When Partner Section has been loaded', () => {
  it('Expect it will render successfully', () => {
    const { getByTestId } = render(
      <PartnerSection {...partnerSectionMockData} />
    );
    const catchThePartnerSectionWrapper = getByTestId(
      `partner-section-catch-id`
    );
    expect(catchThePartnerSectionWrapper).toBeInTheDocument();
    expect(catchThePartnerSectionWrapper).toMatchSnapshot();
  });
});
