import { HeroSection } from '@src/components/compound';
import { render } from '@testing-library/react';

describe('When Hero Section has been loaded', () => {
  it('Expect it will render successfully', () => {
    const { getByTestId } = render(<HeroSection />);
    const catchTheHeroSectionWrapper = getByTestId(`heroSectionCatcher`);
    expect(catchTheHeroSectionWrapper).toBeInTheDocument();
    expect(catchTheHeroSectionWrapper).toMatchSnapshot();
  });
});
