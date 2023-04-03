import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import MockNewsCard from './mock';

import NewsCard from '.';

describe('<NewsCard />', () => {
  it('should render NewsCard', () => {
    renderWithTheme(<NewsCard {...MockNewsCard} />);

    expect(
      screen.getByRole('img', { name: MockNewsCard.title })
    ).toHaveAttribute('src', MockNewsCard.img);

    expect(screen.getByText(MockNewsCard.date)).toBeInTheDocument();
  });
});
