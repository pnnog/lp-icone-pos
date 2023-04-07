import * as S from './styles';

import CourseCardSlider from 'components/CourseCardSlider';
import { CourseCardProps } from 'components/CourseCard';
import Heading from 'components/Heading';
import NewsSlider from 'components/NewsSlider';
import { NewsCardProps } from 'components/NewsCard';
import PacientBanner, { PacientBannerProps } from 'components/PacientBanner';

export type ShowCaseProps = {
  heading?: string;
  courses?: CourseCardProps[];
  news?: NewsCardProps[];
  pacienteHighlight?: PacientBannerProps;
  children?: React.ReactNode;
};
const ShowCase = ({
  heading,
  courses,
  news,
  pacienteHighlight,
  children
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!heading && <Heading>{heading} </Heading>}
    {!!children && <p>{children}</p>}
    {!!courses && <CourseCardSlider items={courses} />}
    {!!news && <NewsSlider items={news} />}
    {!!pacienteHighlight && <PacientBanner {...pacienteHighlight} />}
  </S.Wrapper>
);

export default ShowCase;
