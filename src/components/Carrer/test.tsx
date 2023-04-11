import { screen } from '@testing-library/react';

import Carrer from '.';
import { renderWithTheme } from 'utils/tests/helper';

import mock from './mock';
import theme from 'styles/theme';

describe('<Carrer />', () => {
  it('should render Carrer', () => {
    renderWithTheme(<Carrer {...mock} />);

    expect(screen.getByRole('img', { name: mock.name })).toHaveAttribute(
      'src',
      mock.img
    );

    expect(screen.getByRole('heading', { name: mock.name })).toHaveStyle({
      color: theme.colors.white
    });

    expect(screen.getByText(mock.role)).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render pic on right', () => {
    const { container } = renderWithTheme(<Carrer {...mock} toRight />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'description image'",
      {
        media: '(min-width: 768px)'
      }
    );
  });

  it('should render pic on left', () => {
    const { container } = renderWithTheme(<Carrer {...mock} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'image description'",
      {
        media: '(min-width: 768px)'
      }
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
