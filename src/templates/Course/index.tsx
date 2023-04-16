import * as S from './styles';
import Base from 'templates/Base';
import ShowCase from 'components/ShowCase';

export type CourseTemplateProps = {
  title: string;
  description: string;
  card1?: { date: string; items: string[] };
  card2?: { workload: string; items: string[] };
  card3?: { portion: string; cost: string; items: string[] };
  enrollment: string[];
  courseType: string;
  courseContent: string[];
};

const CourseTemplate = ({
  title,
  description,
  card1,
  card2,
  card3,
  enrollment,
  courseType,
  courseContent
}: CourseTemplateProps) => (
  <Base>
    <ShowCase heading={title}> {description} </ShowCase>
  </Base>
);

export default CourseTemplate;
