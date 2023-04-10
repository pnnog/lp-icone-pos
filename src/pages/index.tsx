import Home from 'templates/Home';
import mockBanners from 'components/BannerSlider/mock';
import mockCourses from 'components/CourseCardSlider/mock';
import mockPacientHighlights from 'components/PacientHighlight/mock';
import mockNews from 'components/NewsSlider/mock';

export default function Index() {
  return (
    <Home
      banners={mockBanners}
      courses={mockCourses}
      pacientHighlights={mockPacientHighlights}
      news={mockNews}
    />
  );
}
