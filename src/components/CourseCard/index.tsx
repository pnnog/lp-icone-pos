import * as S from './styles';

export type CourseCardProps = {
  title: string;
  img: string;
  href: string;
};

const CourseCard = ({
  title,
  href,
  img = '/img/image.png'
}: CourseCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <S.Image src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.LinkTitle href={href}> {title} </S.LinkTitle>
    </S.Content>
  </S.Wrapper>
);

export default CourseCard;
