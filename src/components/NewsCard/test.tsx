import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import mock from './mock';

import NewsCard from '.';

describe('<NewsCard />', () => {
  it('should render NewsCard', () => {
    renderWithTheme(<NewsCard {...mock} />);

    expect(screen.getByRole('img', { name: mock.title })).toHaveAttribute(
      'src',
      mock.img
    );

    expect(screen.getByText(mock.date)).toBeInTheDocument();
  });
});
