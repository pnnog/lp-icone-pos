import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helper';
import mock from './mock';

import CourseBanner from '.';

describe('<CourseBanner />', () => {
  it('should render CourseBanner wiwth title', () => {
    renderWithTheme(<CourseBanner {...mock} />);

    expect(
      screen.getByRole('heading', { name: /ESPECIALIZAÇÃO EM IMPLANTODONTIA/i })
    ).toHaveStyle({ color: '#F8FAFC' });
  });

  it('should render benefits title, description', () => {
    renderWithTheme(<CourseBanner {...mock} />);

    expect(screen.getByRole('heading', { name: /Início/i })).toHaveStyle({
      color: '#F2994A'
    });

    expect(screen.getByText(/Março de 2023/i)).toHaveStyle({
      color: '#F8FAFC'
    });
  });
});
