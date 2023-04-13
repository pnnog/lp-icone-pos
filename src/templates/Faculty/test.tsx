import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';

import FacultyTemplate from '.';
import { mockCordinators, mockTeachers } from './mock';
import { renderWithTheme } from 'utils/tests/helper';

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="Mock Base"></div>;
    }
  };
});

describe('<FacultyTemplate />', () => {
  it('should render Teachers', () => {
    renderWithTheme(
      <FacultyTemplate teachers={mockTeachers} coordinators={mockCordinators} />
    );

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
  });
});
