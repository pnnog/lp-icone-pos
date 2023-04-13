import mockBanners from 'components/BannerSlider/mock';
import { mockCourseCards } from 'components/Card/mock';
import mockPacientHighlights from 'components/PacientHighlight/mock';
import mockNews from 'components/NewsSlider/mock';
import HomeTemplate from 'templates/Home';

export default function Index() {
  return (
    <HomeTemplate
      banners={mockBanners}
      courses={mockCourseCards}
      pacientHighlight={mockPacientHighlights}
      news={mockNews}
    />
  );
}
