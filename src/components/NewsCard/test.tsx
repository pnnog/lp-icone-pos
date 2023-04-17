import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import MockNewsCard from '../NewsSlider/mock';

import NewsCard from '.';

describe('<NewsCard />', () => {
  it('should render NewsCard', () => {
    renderWithTheme(<NewsCard {...MockNewsCard[0]} />);

    expect(screen.getByRole('img', { name: MockNewsCard[0].title })).toHaveAttribute('src', MockNewsCard[0].img);

    expect(screen.getByText(MockNewsCard[0].date)).toBeInTheDocument();
  });
});
