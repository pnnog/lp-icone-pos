import '../../../.jest/match-media-mock';

import NewsSlider from '.';
import { renderWithTheme } from 'utils/tests/helper';
import MockNewsSlider from './mock';

describe('<NewsSlider />', () => {
  it('should render NewsSlider', () => {
    const { container } = renderWithTheme(
      <NewsSlider items={MockNewsSlider} />
    );

    expect(container.querySelectorAll('.slick-active')).toHaveLength(3);
  });
});
