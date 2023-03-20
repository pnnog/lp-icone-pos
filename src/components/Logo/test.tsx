import { render, screen } from '@testing-library/react';

import Logo from '.';

const props = {
  src: '/img/Logo.svg',
  alt: 'Logo branca escrito ícone. Pós graduação em odontologia'
};

describe('<Logo />', () => {
  // 1. Deve renderizar com a src correta
  it('should render Logo with correctly source', () => {
    render(<Logo />);
    expect(
      screen.getByRole('img', {
        name: /Logo branca escrito ícone. Pós graduação em odontologia/i
      })
    ).toHaveAttribute('src', props.src);
  });
});

// 2. Deve renderizar a logo pequena
it('should render normal Logo', () => {
  render(<Logo />);
  expect(screen.getByRole('img', { name: props.alt }).parentNode).toHaveStyle({
    width: '22.1rem'
  });
});

it('should render small Logo', () => {
  render(<Logo small />);
  expect(screen.getByRole('img', { name: props.alt }).parentNode).toHaveStyle({
    width: '10.2rem'
  });
});

it('should render Logo in big screen with this rules', () => {
  const { container } = render(<Logo />);
  expect(
    screen.getByRole('img', { name: props.alt }).parentNode
  ).toHaveStyleRule('width', '24.2rem', { media: '(min-width: 768px)' });

  expect(container).toMatchSnapshot();
});
