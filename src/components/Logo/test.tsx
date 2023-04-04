import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
  it('should render header Logo', () => {
    render(<Logo size="header" />);
    expect(
      screen.getByRole('img', {
        name: /Logo branca escrito ícone. Pós graduação em odontologia/i
      }).parentNode
    ).toHaveStyle({
      width: '22rem'
    });
  });

  it('should render footer Logo', () => {
    const { container } = render(<Logo size="footer" />);
    expect(
      screen.getByRole('img', {
        name: /Logo branca escrito ícone. Pós graduação em odontologia/i
      }).parentNode
    ).toHaveStyle({
      width: '10rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
