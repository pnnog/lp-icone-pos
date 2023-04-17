import { screen } from '@testing-library/react';
import MockHighlight from './mock';

import Highlight from '.';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helper';

describe('<PacientHighlight />', () => {
  it('should render PacientBanner', () => {
    renderWithTheme(<Highlight {...MockHighlight} />);

    expect(screen.getByRole('img', { name: MockHighlight.title }).parentElement?.parentElement).toHaveAttribute(
      'src',
      MockHighlight.img
    );

    expect(screen.getByRole('heading', { name: MockHighlight.title })).toHaveStyle({
      color: theme.colors.white
    });
  });
});
