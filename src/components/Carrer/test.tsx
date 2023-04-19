import Carrer from '.';
import { renderWithTheme } from 'utils/tests/helper';

import mock from './mock';
import { screen } from '@testing-library/react';

describe('<Carrer />', () => {
  it('should render Carrer with props', () => {
    renderWithTheme(<Carrer {...mock} />);

    expect(screen.getByRole('img', { name: mock.name })).toBeInTheDocument();
  });
});
