import * as S from './styles';

export type MainProps = {
  title: string;
};

export default function Main({ title }: MainProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
