import * as S from './styles';

import CourseCardSlider from 'components/CourseCardSlider';
import { CourseCardProps } from 'components/CourseCard';
import ButtonLink, { ButtonLinkProps } from 'components/ButtonLink';
import Heading from 'components/Heading';
import NewsSlider from 'components/NewsSlider';
import { NewsCardProps } from 'components/NewsCard';

export type ShowCaseProps = {
  heading?: string;
  courses?: CourseCardProps[];
  news?: NewsCardProps[];
  button?: boolean;
  description?: string;
};
const ShowCase = ({
  heading,
  courses,
  news,
  description,
  button
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!heading && <Heading>{heading} </Heading>}
    {!!description && <p> {description} </p>}
    {!!courses && <CourseCardSlider items={courses} />}
    {!!news && <NewsSlider items={news} />}
    {!!button && <ButtonLink>Inscreva-se</ButtonLink>}
  </S.Wrapper>
);

export default ShowCase;
