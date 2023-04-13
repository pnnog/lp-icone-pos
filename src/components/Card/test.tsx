import { fireEvent, screen } from '@testing-library/react';
import mock from './mock';

import Card from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Card />', () => {
  it('should render Card with title and img', () => {
    renderWithTheme(<Card {...mock} />);

    expect(
      screen.getByRole('heading', { name: mock.title })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: mock.title })).toHaveAttribute(
      'src',
      mock.img
    );
  });

  it('should render modal open', () => {
    renderWithTheme(<Card {...mock} />);

    //seleciona o modal
    const modal = screen.getByLabelText('modal');

    //verifica se tá escondido
    expect(modal).toHaveAttribute('aria-hidden', 'true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    //seleciona o botão de abrir o modal
    const openModalButton = screen.getByRole('button', { name: /open modal/i });

    //abre o modal
    fireEvent.click(openModalButton);

    //verifica se tá aberto
    expect(modal).toHaveAttribute('aria-hidden', 'false');
    expect(modal).toHaveStyle({ opacity: 1, pointerEvents: 'all' });
  });

  it('should render modal close', () => {
    renderWithTheme(<Card {...mock} />);

    //seleciona o modal
    const modal = screen.getByLabelText('modal');

    //seleciona o botão de abrir o modal
    const openModalButton = screen.getByRole('button', { name: /open modal/i });

    //abre o modal
    fireEvent.click(openModalButton);

    //seleciona o botão de fechar o modal
    const closeModalButton = screen.getByRole('button', {
      name: /close modal/i
    });

    //fecha o modal
    fireEvent.click(closeModalButton);

    //verifica se tá escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });
  });

  it('should render modal content', () => {
    renderWithTheme(<Card {...mock} />);
    const openModalButton = screen.getByRole('button', { name: /open modal/i });

    fireEvent.click(openModalButton);
    expect(screen.getAllByRole('heading', { name: mock.title })).toHaveLength(
      2
    );

    expect(screen.getByText(mock.modal));
  });

  it('does not should render modal if no modalText is present', () => {
    const { container } = renderWithTheme(
      <Card img="teste img" title="title test" />
    );

    const openModalButton = screen.getByRole('button', { name: /open modal/i });

    fireEvent.click(openModalButton);

    const modal = screen.getByLabelText('modal');
    expect(modal).toHaveAttribute('aria-hidden', 'true');
    expect(container).toMatchSnapshot();
  });
});
