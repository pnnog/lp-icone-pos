import mockBanners from 'components/BannerSlider/mock';
import mockCourses from 'components/CourseCardSlider/mock';
import mockPacientHighlights from 'components/PacientHighlight/mock';
import mockNews from 'components/NewsSlider/mock';
import HomeTemplate from 'templates/Home';

export default function Index() {
  return (
    <HomeTemplate
      banners={mockBanners}
      courses={mockCourses}
      pacientHighlight={mockPacientHighlights}
      news={mockNews}
    />
  );
}
