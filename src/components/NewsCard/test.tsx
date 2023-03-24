import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import NewsCard from '.';

const props = {
  img: '/img/image.png',
  date: '1 fev 2019',
  title:
    'Aluna Mirella Martins Costa recebe prêmio de honra ao mérito científico.'
};

describe('<NewsCard />', () => {
  it('should render NewsCard', () => {
    renderWithTheme(<NewsCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByText(props.date)).toBeInTheDocument();
  });
});
