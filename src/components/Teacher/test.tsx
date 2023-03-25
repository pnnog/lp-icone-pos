import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Teacher from '.';

const props = {
  name: 'Dr. Luiz Gustavo Bastos',
  img: '/img/dr.png'
};

describe('<Teacher />', () => {
  it('should render Teacher', () => {
    renderWithTheme(<Teacher {...props} />);

    expect(screen.getByRole('img', { name: props.name })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByText(props.name)).toHaveStyle({
      color: '#F8FAFC'
    });
  });
});
