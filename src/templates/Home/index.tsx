import BannerSlider from 'components/BannerSlider';
import Base from 'templates/Base';
import MockBannerSlider from 'components/BannerSlider/mock';
import * as S from './styles';
import ShowCase from 'templates/ShowCase';
import mockCourses from 'components/CourseCardSlider/mock';

const Home = () => (
  <Base>
    <S.SectionBanner>
      <BannerSlider items={MockBannerSlider} />
    </S.SectionBanner>
    <ShowCase heading="Cursos" courses={mockCourses} />
  </Base>
);

export default Home;
