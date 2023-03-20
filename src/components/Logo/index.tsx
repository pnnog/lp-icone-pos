import * as S from './styles';

export type LogoProps = {
  small?: boolean;
};
const Logo = ({ small = false }: LogoProps) => (
  <S.Wrapper small={small}>
    <S.Logo
      alt="Logo branca escrito ícone. Pós graduação em odontologia"
      src="/img/Logo.svg"
    />
  </S.Wrapper>
);

export default Logo;
