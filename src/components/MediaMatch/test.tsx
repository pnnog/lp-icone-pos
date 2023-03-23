import { render, screen } from '@testing-library/react';

import MediaMatch from '.';

describe('<MediaMatch />', () => {
  it('should render MediaMatch', () => {
    render(<MediaMatch greaterThan="medium"> Não deve aparecer </MediaMatch>);
    expect(screen.getByText(/Não deve aparecer/i)).toHaveStyleRule(
      'display',
      'none'
    );
  });

  it('doest not should render MediaMatch', () => {
    const { container } = render(
      <MediaMatch greaterThan="medium"> Deve aparecer </MediaMatch>
    );
    expect(screen.getByText(/Deve aparecer/i)).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width:768px)'
      }
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
