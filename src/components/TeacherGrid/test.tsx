import { render, screen } from '@testing-library/react';

import TeacherGrid from '.';

describe('<TeacherGrid />', () => {
  it('should render TeacherGrid', () => {
    render(<TeacherGrid />);

    expect(
      screen.getByRole('heading', { name: /TeacherGrid/i })
    ).toBeInTheDocument();
  });
});
