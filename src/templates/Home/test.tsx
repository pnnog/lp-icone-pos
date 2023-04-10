import '../../../.jest/match-media-mock';

import Home from '.';
import { renderWithTheme } from 'utils/tests/helper';

import mockBanners from 'components/BannerSlider/mock';
import mockCourses from 'components/CourseCardSlider/mock';
import mockPacientHighlight from 'components/PacientHighlight/mock';
import mockNews from 'components/NewsSlider/mock';

const props = {
  banners: mockBanners.slice(0, 1),
  courses: mockCourses.slice(0, 1),
  pacientHighlight: mockPacientHighlight,
  news: mockNews.slice(0, 1)
};

describe('<Home />', () => {
  it('should render Home', () => {
    renderWithTheme(<Home {...props} />);
  });
});
