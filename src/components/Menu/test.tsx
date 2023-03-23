import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Menu from '.';

describe('<Menu />', () => {
  it('should render Menu', () => {
    renderWithTheme(<Menu />);
    // 1. Verificar se o ícone de abrir está na tela
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    // 2. Verificar se a logo está na tela
    expect(
      screen.getByRole('img', {
        name: /Logo branca escrito ícone. Pós graduação em odontologia/i
      })
    ).toBeInTheDocument();
  });

  it('should render full menu', () => {
    const { container } = renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    //Verifica se está escondido
    expect(fullMenuElement).toHaveStyle({ opacity: '0' });
    expect(fullMenuElement).toHaveAttribute('aria-hidden', 'true');

    //Verificar se ele abre quando clicamos no ícone
    fireEvent.click(screen.getByLabelText('open menu'));
    expect(fullMenuElement).toHaveStyle({
      opacity: '1'
    });
    expect(fullMenuElement).toHaveAttribute('aria-hidden', 'false');

    //Verificar se ele fecha quando clicamos no ícone de fechar
    fireEvent.click(screen.getByLabelText('close menu'));
    expect(fullMenuElement).toHaveStyle({ opacity: '0' });
    expect(fullMenuElement).toHaveAttribute('aria-hidden', 'true');

    expect(container.firstChild).toMatchSnapshot();
  });
});
