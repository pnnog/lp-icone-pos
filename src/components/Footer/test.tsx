import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Footer from '.';

describe('<Footer />', () => {
  it('should render Footer with logo ', () => {
    renderWithTheme(<Footer />);
    expect(
      screen.getByRole('img', { name: /Logo branca escrito ícone/i })
    ).toBeInTheDocument();
  });

  it('should render Footer with 2 columns ', () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Contato/i }).parentNode?.parentNode
    ).toHaveStyleRule('grid-template-columns', 'repeat(2,1fr)');
  });

  it('should render Footer with 4 columns ', () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Contato/i }).parentNode?.parentNode
    ).toHaveStyleRule('grid-template-columns', 'repeat(4,1fr)', {
      media: '(min-width: 768px)'
    });
  });
});
