import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Banner from '.';

const props = {
  title: 'Especialização implantodontia',
  img: '/img/doc.png',
  date: '1/1/1',
  teacher: '123',
  href: '123'
};

describe('<Banner />', () => {
  it('should render Banner', () => {
    renderWithTheme(<Banner {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );
  });

  it('should render reminder card when date is passed', () => {
    renderWithTheme(<Banner {...props} />);

    expect(screen.getByText(props.title)).toHaveStyle({ color: '#0284C7' });
  });
});
