import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Footer from '.';

describe('<Footer />', () => {
  it('should render Footer', () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByRole('img', { name: /Logo branca escrito ícone/i })
    ).toBeInTheDocument();
  });
});
