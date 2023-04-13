import '../../../.jest/match-media-mock';

import HomeTemplate, { HomeTemplateProps } from '.';
import { renderWithTheme } from 'utils/tests/helper';
import mockBanners from 'components/BannerSlider/mock';
import { mockCourseCards } from 'components/Card/mock';
import mockNews from 'components/NewsSlider/mock';
import mockPacientHighlight from 'components/PacientHighlight/mock';

const props: HomeTemplateProps = {
  banners: mockBanners,
  courses: mockCourseCards,
  pacientHighlight: mockPacientHighlight,
  news: mockNews
};

describe('<HomeTemplate />', () => {
  it('should render HomeTemplate', () => {
    renderWithTheme(<HomeTemplate {...props} />);
  });
});
