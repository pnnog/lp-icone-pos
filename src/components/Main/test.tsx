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

  it('should render title with white color', () => {
    renderWithTheme(<Main {...props} />);
    expect(screen.getByRole('heading', { name: props.title })).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render main with bg color', () => {
    const { container } = renderWithTheme(<Main {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }).parentNode
    ).toHaveStyle({
      background: '#0000FF'
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
