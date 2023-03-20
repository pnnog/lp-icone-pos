import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import Main from '.';

const props = {
  title: 'Main Title'
};

describe('Main', () => {
  it('should render main title', () => {
    renderWithTheme(<Main {...props} />);
    expect(
      screen.getByRole('heading', {
        name: /Main Title/i
      })
    ).toBeInTheDocument();
  });
});
