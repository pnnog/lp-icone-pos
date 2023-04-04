import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Heading from '.';
import theme from 'styles/theme';

describe('<Heading />', () => {
  it('should render Heading black and cosmetic with primary color', () => {
    renderWithTheme(<Heading> Título teste</Heading>);
    const element = screen.getByRole('heading', { name: /Título teste/i });

    expect(element).toHaveStyle({ color: theme.colors.black });
    expect(element).toHaveStyleRule('background-color', theme.colors.primary, {
      modifier: '::before'
    });
  });

  it('should render cosmetic with white color', () => {
    renderWithTheme(<Heading color="white"> Título teste</Heading>);
    const element = screen.getByRole('heading', { name: /Título teste/i });

    expect(element).toHaveStyleRule('background-color', theme.colors.white, {
      modifier: '::before'
    });
  });

  it('should render bottom line with primary color', () => {
    renderWithTheme(<Heading line="bottom"> Título teste</Heading>);
    const element = screen.getByRole('heading', { name: /Título teste/i });

    expect(element).toHaveStyleRule('background-color', theme.colors.primary, {
      modifier: '::after'
    });
  });

  it('should render bottom line with white color', () => {
    const { container } = renderWithTheme(
      <Heading line="bottom" color="white">
        Título teste
      </Heading>
    );
    const element = screen.getByRole('heading', { name: /Título teste/i });
    expect(element).toHaveStyleRule('background-color', theme.colors.white, {
      modifier: '::after'
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
