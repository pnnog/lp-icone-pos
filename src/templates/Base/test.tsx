import { render, screen } from '@testing-library/react';

import Base from '.';

describe('<Base />', () => {
  it('should render Base', () => {
    render(<Base />);

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument();
  });
});
