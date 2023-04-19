import * as S from './styles';

export type CarrerProps = {
  img: string;
  name: string;
  role: string;
  description: string;
};

const Carrer = ({ img, name, role, description }: CarrerProps) => (
  <S.Wrapper>
    <S.ImageBox img={img} role="img" aria-label={name} />
    <S.Content>
      <S.Name> {name}</S.Name>
      <S.Role> {role}</S.Role>
      <S.Description>{description} </S.Description>
    </S.Content>
  </S.Wrapper>
);

export default Carrer;
