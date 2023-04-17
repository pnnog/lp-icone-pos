import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';

import FacultyTemplate from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { facultyData } from 'data/data';

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
      <FacultyTemplate teachers={[facultyData.teachers[0]]} coordinators={[facultyData.coordinators[0]]} />
    );

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
  });
});
