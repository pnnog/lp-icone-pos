import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Heading from '.';

const props = {
  children: 'Corpo Docente'
};

describe('<Heading />', () => {
  // Deve renderizar o Heading com o texto desejado
  it('should render Heading', () => {
    renderWithTheme(<Heading {...props} />);
    expect(
      screen.getByRole('heading', { name: /Corpo Docente/i })
    ).toBeInTheDocument();
  });

  // Deve renderizar heading branco
  it('should render Heading with white color', () => {
    renderWithTheme(<Heading {...props} color="white" />);
    expect(screen.getByRole('heading', { name: /Corpo Docente/i })).toHaveStyle(
      { color: '#F8FAFC' }
    );
  });

  // Deve renderizar heading azul
  it('should render Heading with blue color', () => {
    renderWithTheme(<Heading {...props} />);

    expect(screen.getByRole('heading', { name: /Corpo Docente/i })).toHaveStyle(
      { color: '#0C4A6E' }
    );
  });

  //Deve renderizar heading small (media query)
  it('should render heading with small size', () => {
    renderWithTheme(<Heading {...props} />);
    expect(screen.getByRole('heading', { name: /Corpo Docente/i })).toHaveStyle(
      { 'font-size': '2.0rem' }
    );
  });

  // Deve renderizar heading normal size (media query)
  it('should render heading with normal size', () => {
    renderWithTheme(<Heading {...props} />);
    expect(
      screen.getByRole('heading', { name: /Corpo Docente/i })
    ).toHaveStyleRule('font-size', '2.8rem', {
      media: '(min-width:768px)'
    });
  });

  // Deve ter o cosmético branco
  it('should render heading with blue cosmetic ', () => {
    renderWithTheme(<Heading {...props} />);
    expect(
      screen.getByRole('heading', { name: /Corpo docente/i })
    ).toHaveStyleRule('background-color', '#0C4A6E', {
      modifier: '::before'
    });
  });

  // Deve ter o cosmético branco
  it('should render heading with white cosmetic ', () => {
    const { container } = renderWithTheme(<Heading {...props} color="white" />);
    expect(
      screen.getByRole('heading', { name: /Corpo docente/i })
    ).toHaveStyleRule('background-color', '#F8FAFC', {
      modifier: '::before'
    });

    expect(container).toMatchSnapshot();
  });
});
