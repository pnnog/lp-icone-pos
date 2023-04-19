import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import MockBanner from './mock';

import Banner from '.';

describe('<Banner />', () => {
  it('should render Banner', () => {
    renderWithTheme(<Banner {...MockBanner} />);

    expect(
      screen.getByRole('img', { name: MockBanner.title })
    ).toBeInTheDocument();
  });

  it('should render reminder card when date is passed', () => {
    renderWithTheme(<Banner {...MockBanner} />);

    expect(screen.getByText(MockBanner.title)).toHaveStyle({
      color: '#0284C7'
    });
  });
});
