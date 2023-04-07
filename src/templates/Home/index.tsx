import BannerSlider from 'components/BannerSlider';
import Base from 'templates/Base';
import MockBannerSlider from 'components/BannerSlider/mock';
import * as S from './styles';
import ShowCase from 'components/ShowCase';
import mockCourses from 'components/CourseCardSlider/mock';
import MockPacienteBanner from 'components/PacientBanner/mock';
import MockNewsSlider from 'components/NewsSlider/mock';

const Home = () => (
  <Base>
    <S.SectionBanner>
      <BannerSlider items={MockBannerSlider} />
    </S.SectionBanner>

    <ShowCase heading="Cursos" courses={mockCourses} />

    <ShowCase heading="A Escola">
      Com a proposta de inovação na área de educação, a Ícone Pós-graduação
      surge trazendo cursos de especialização e atualização em Implantodontia.
      Com um corpo docente referência em implantodontia na Bahia, nossa equipe
      está empenhada em promover uma experiência única de aprendizado! Vamos
      juntos!
    </ShowCase>

    <ShowCase
      heading="Central do paciente"
      pacienteHighlight={MockPacienteBanner}
    />
    <ShowCase heading="Notícias" news={MockNewsSlider} />
  </Base>
);

export default Home;
