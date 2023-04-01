import Link from 'next/link';
import * as S from './styles';

export type CourseCardProps = {
  caption: string;
  img: string;
  href: string;
};

const CourseCard = ({ caption, href, img }: CourseCardProps) => (
  <S.Wrapper>
    <Link href={href}>
      <S.ImageBox>
        <S.Image src={img} alt={caption} />
      </S.ImageBox>

      {!!caption && (
        <S.Content>
          <S.Caption> {caption} </S.Caption>
        </S.Content>
      )}
    </Link>
  </S.Wrapper>
);

export default CourseCard;
