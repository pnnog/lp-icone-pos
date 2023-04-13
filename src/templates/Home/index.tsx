import Base from 'templates/Base';

import BannerSlider from 'components/BannerSlider';
import ShowCase from 'components/ShowCase';
import { BannerProps } from 'components/Banner';
import { CourseCardProps } from 'components/CourseCard';
import { PacientHighlightProps } from 'components/PacientHighlight';
import { NewsCardProps } from 'components/NewsCard';

import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  courses: CourseCardProps[];
  pacientHighlight: PacientHighlightProps;
  news: NewsCardProps[];
};

const HomeTemplate = ({
  banners,
  courses,
  pacientHighlight,
  news
}: HomeTemplateProps) => (
  <Base>
    <S.SectionBanner>
      <BannerSlider items={banners} />
    </S.SectionBanner>

    <ShowCase heading="Cursos" courses={courses} />

    <ShowCase heading="A Escola">
      Com a proposta de inovação na área de educação, a Ícone Pós-graduação
      surge trazendo cursos de especialização e atualização em Implantodontia.
      Com um corpo docente referência em implantodontia na Bahia, nossa equipe
      está empenhada em promover uma experiência única de aprendizado! Vamos
      juntos!
    </ShowCase>

    <ShowCase
      heading="Central do paciente"
      pacientHighlight={pacientHighlight}
    />
    <ShowCase heading="Notícias" news={news} />
  </Base>
);

export default HomeTemplate;
