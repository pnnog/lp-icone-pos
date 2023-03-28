import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Slider, { SliderSettings } from '.';

const settings: SliderSettings = {
  slidesToShow: 1,
  speed: 1,
  infinite: false
};

describe('<Slider />', () => {
  it('should render Slider with 3 slides', () => {
    const { container } = renderWithTheme(
      <Slider settings={settings}>
        <div> item 1</div>
        <div> item 2</div>
        <div> item 3</div>
      </Slider>
    );

    expect(screen.getByText(/item 1/i).parentNode?.parentNode).toHaveClass(
      'slick-slide'
    );

    expect(screen.getByText(/item 2/i).parentNode?.parentNode).toHaveClass(
      'slick-slide'
    );

    expect(screen.getByText(/item 3/i).parentNode?.parentNode).toHaveClass(
      'slick-slide'
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
