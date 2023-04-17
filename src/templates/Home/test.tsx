import '../../../.jest/match-media-mock';

import HomeTemplate, { HomeTemplateProps } from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { homeData } from 'data/data';

const props: HomeTemplateProps = {
  courses: homeData.courses,
  pacientHighlight: homeData.highlight,
  news: homeData.news,
  banners: homeData.banners
};

describe('<HomeTemplate />', () => {
  it('should render HomeTemplate', () => {
    renderWithTheme(<HomeTemplate {...props} />);
  });
});
