import Base from 'templates/Base';

import BannerSlider from 'components/BannerSlider';
import ShowCase from 'components/ShowCase';
import { BannerProps } from 'components/Banner';
import { HighlightProps } from 'components/Highlight';
import { NewsCardProps } from 'components/NewsCard';

import * as S from './styles';
import Heading from 'components/Heading';
import Card from 'components/Card/';
import { CardProps } from 'components/Card';
import Link from 'next/link';
import Grid from 'components/Grid';

export type HomeTemplateProps = {
  banners: BannerProps[];
  courses: CardProps[];
  pacientHighlight: HighlightProps;
  news: NewsCardProps[];
};

const HomeTemplate = ({ banners, courses, pacientHighlight, news }: HomeTemplateProps) => (
  <Base>
    <S.SectionBanner>
      <BannerSlider items={banners} />
    </S.SectionBanner>
    <S.SectionCourses>
      <Heading> Cursos </Heading>

      <Grid>
        {courses.map((course) => (
          <Link key={course.title} href="/cursos">
            <Card {...course} />
          </Link>
        ))}
      </Grid>
    </S.SectionCourses>

    <ShowCase heading="A Escola">
      Com a proposta de inovação na área de educação, a Ícone Pós-graduação surge trazendo cursos de especialização e
      atualização em Implantodontia. Com um corpo docente referência em implantodontia na Bahia, nossa equipe está
      empenhada em promover uma experiência única de aprendizado! Vamos juntos!
    </ShowCase>

    <ShowCase heading="Central do paciente" highlight={pacientHighlight} />
    <ShowCase heading="Notícias" news={news} />
  </Base>
);

export default HomeTemplate;
