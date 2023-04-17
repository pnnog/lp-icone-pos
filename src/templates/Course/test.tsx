import '../../../.jest/match-media-mock';

import CourseTemplate, { CourseTemplateProps } from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { screen } from '@testing-library/react';
import { courseData } from 'data/data';

const props: CourseTemplateProps = {
  courseContent: courseData[0].courseContent,
  courseType: courseData[0].courseType,
  description: courseData[0].description,
  title: courseData[0].title,
  enrollment: courseData[0].enrollment,
  card1: courseData[0].card1,
  card2: courseData[0].card2,
  card3: courseData[0].card3
};

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="showcase mock"></div>;
    }
  };
});

describe('<CourseTemplate />', () => {
  it('should render CourseTemplate', () => {
    renderWithTheme(<CourseTemplate {...props} />);

    expect(screen.getByTestId('showcase mock')).toBeInTheDocument();
  });
});
