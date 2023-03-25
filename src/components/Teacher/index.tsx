import Link from 'next/link';
import * as S from './styles';

export type TeacherProps = {
  img: string;
  name: string;
};
const Teacher = ({ name, img }: TeacherProps) => (
  <S.Wrapper>
    <Link href="/">
      <S.ImageWrapper>
        <S.Image alt={name} src={img} />
      </S.ImageWrapper>
      <S.Name>{name}</S.Name>
    </Link>
  </S.Wrapper>
);

export default Teacher;
