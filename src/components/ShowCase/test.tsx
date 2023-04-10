import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';

import ShowCase from '.';
import { renderWithTheme } from 'utils/tests/helper';

import mockShowCase from './mock';

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Heading"></div>;
    }
  };
});

jest.mock('components/CourseCardSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Course card slider"></div>;
    }
  };
});

jest.mock('components/NewsSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock News Slider"></div>;
    }
  };
});

jest.mock('components/PacientHighlight', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Pacient Highlight"></div>;
    }
  };
});

describe('<ShowCase />', () => {
  it('should render ShowCase', () => {
    const { container } = renderWithTheme(
      <ShowCase {...mockShowCase}>children test</ShowCase>
    );
    expect(screen.getByTestId('Mock Heading')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Course card slider')).toBeInTheDocument();
    expect(screen.getByTestId('Mock News Slider')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Pacient Highlight')).toBeInTheDocument();
    expect(screen.getByText(/children test/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
