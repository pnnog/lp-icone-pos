import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';

import ShowCase, { ShowCaseProps } from '.';
import { renderWithTheme } from 'utils/tests/helper';

import mockNews from 'components/NewsSlider/mock';
import mockHighlight from 'components/Highlight/mock';

const props: ShowCaseProps = {
  heading: 'title test',
  news: mockNews,
  highlight: mockHighlight
};

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Heading"></div>;
    }
  };
});

jest.mock('components/Card', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Card"></div>;
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

jest.mock('components/Highlight', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Highlight"></div>;
    }
  };
});

describe('<ShowCase />', () => {
  it('should render ShowCase', () => {
    const { container } = renderWithTheme(
      <ShowCase {...props}>children test</ShowCase>
    );
    expect(screen.getByTestId('Mock Heading')).toBeInTheDocument();
    expect(screen.getByTestId('Mock News Slider')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Highlight')).toBeInTheDocument();
    expect(screen.getByText(/children test/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
