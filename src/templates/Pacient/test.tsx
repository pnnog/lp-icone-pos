import { screen } from '@testing-library/react';
import PacientTemplate from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { pacienteData } from 'data/data';

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
    renderWithTheme(<PacientTemplate cards={pacienteData.cards} />);

    expect(screen.getAllByTestId('mock card')).toHaveLength(3);
  });
});
