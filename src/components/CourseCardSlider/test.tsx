import '../../../.jest/match-media-mock';

import CourseCardSlider from '.';
import { renderWithTheme } from 'utils/tests/helper';
import MockCourseSlider from './mock';
import { screen } from '@testing-library/react';

describe('<CourseCardSlider />', () => {
  it('should render CourseCardSlider with one visible slide and two hidden slides', () => {
    const { container } = renderWithTheme(
      <CourseCardSlider items={MockCourseSlider} />
    );

    expect(screen.queryByText(MockCourseSlider[0].caption));
    expect(screen.getByText(MockCourseSlider[1].caption));
    expect(screen.getByText(MockCourseSlider[2].caption));

    expect(container.firstChild).toBeInTheDocument();
  });
});
