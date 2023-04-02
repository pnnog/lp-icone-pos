import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import MockCourseCard from './mock';

import CourseCard from '.';

describe('<CourseCard />', () => {
  it('should render CourseCard', () => {
    const { container } = renderWithTheme(<CourseCard {...MockCourseCard} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      MockCourseCard.href
    );

    expect(
      screen.getByRole('img', { name: MockCourseCard.caption })
    ).toHaveAttribute('src', MockCourseCard.img);

    expect(container.firstChild).toMatchSnapshot();
  });
});
