import { screen } from '@testing-library/react';

import Base from '.';
import { renderWithTheme } from 'utils/tests/helper';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock menu"></div>;
    }
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock footer"></div>;
    }
  };
});

describe('<Base />', () => {
  it('should render Base', () => {
    const { container } = renderWithTheme(<Base>Content</Base>);

    expect(screen.getByTestId('Mock menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock footer')).toBeInTheDocument();

    expect(container).toMatchSnapshot;
  });
});
