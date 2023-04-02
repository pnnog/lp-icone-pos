import Link from 'next/link';
import * as S from './styles';

export type CourseCardProps = {
  id: string;
  caption?: string;
  img: string;
  href?: string;
};

const CourseCard = ({ id, caption, href, img }: CourseCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={caption || id} />
    </S.ImageBox>

    {!!caption && href && (
      <S.Content>
        <Link href={href}>{caption}</Link>
      </S.Content>
    )}
  </S.Wrapper>
);

export default CourseCard;
