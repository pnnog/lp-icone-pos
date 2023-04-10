import { screen } from '@testing-library/react';
import MockPacientHighlight from './mock';

import PacientHighlight from '.';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helper';

describe('<PacientHighlight />', () => {
  it('should render PacientBanner', () => {
    renderWithTheme(<PacientHighlight {...MockPacientHighlight} />);

    expect(
      screen.getByRole('img', { name: MockPacientHighlight.title })
        .parentElement?.parentElement
    ).toHaveAttribute('src', MockPacientHighlight.img);

    expect(
      screen.getByRole('heading', { name: MockPacientHighlight.title })
    ).toHaveStyle({
      color: theme.colors.white
    });
  });
});
