import '../../../.jest/match-media-mock';

import mock from './mock';
import CourseTemplate from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { screen } from '@testing-library/react';

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
    renderWithTheme(<CourseTemplate {...mock} />);

    expect(screen.getByTestId('showcase mock')).toBeInTheDocument();
  });
});
