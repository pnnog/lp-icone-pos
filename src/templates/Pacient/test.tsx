import { screen } from '@testing-library/react';
import PacientTemplate from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { mockPacientCards } from 'components/Card/mock';

jest.mock('components/Card', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="mock card"></div>;
    }
  };
});

describe('<PacientTemplate />', () => {
  it('should render PacientTemplate', () => {
    renderWithTheme(<PacientTemplate cards={mockPacientCards} />);

    expect(screen.getAllByTestId('mock card')).toHaveLength(5);
  });
});
