import { screen } from '@testing-library/react';

import Base from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Base />', () => {
  it('should render Base', () => {
    renderWithTheme(
      <Base>
        <h1> Conteúdo da página</h1>
      </Base>
    );

    expect(
      screen.getByRole('heading', { name: /Conteúdo da página/i })
    ).toBeInTheDocument();
  });
});
