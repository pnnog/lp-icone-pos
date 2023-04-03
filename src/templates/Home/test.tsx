import { render, screen } from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  it('should render Home', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument();
  });
});
