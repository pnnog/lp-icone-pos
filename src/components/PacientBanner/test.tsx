import { screen } from '@testing-library/react';
import MockBannerPacient from './mock';

import PacientBanner from '.';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helper';

describe('<PacientBanner />', () => {
  it('should render PacientBanner', () => {
    renderWithTheme(<PacientBanner {...MockBannerPacient} />);

    expect(
      screen.getByRole('img', { name: MockBannerPacient.title }).parentElement
        ?.parentElement
    ).toHaveAttribute('src', MockBannerPacient.img);

    expect(
      screen.getByRole('heading', { name: MockBannerPacient.title })
    ).toHaveStyle({
      color: theme.colors.white
    });
  });
});
