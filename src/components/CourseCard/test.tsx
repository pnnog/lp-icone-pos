import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import CourseCard from '.';

const props = {
  title: 'Especialização em implantodontia',
  img: '/img/pic1',
  href: '#'
};

describe('<CourseCard />', () => {
  it('should render CourseCard', () => {
    const { container } = renderWithTheme(<CourseCard {...props} />);
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      props.href
    );

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
