import * as S from './styles';

export type CarrerProps = {
  img?: string;
  name: string;
  role?: string;
  roles: string[];
  toRight?: boolean;
};

const Carrer = ({ img, name, role, roles, toRight = false }: CarrerProps) => (
  <S.Wrapper toRight={toRight}>
    <S.ImageBox>
      <img src={img} alt={name} />
    </S.ImageBox>

    <S.Description>
      <S.Name> {name}</S.Name>
      <S.Role> {role}</S.Role>
      <ul>
        {roles.map((item, index) => (
          <li key={`item ${index}`}>{item}</li>
        ))}
      </ul>
    </S.Description>
  </S.Wrapper>
);

export default Carrer;
