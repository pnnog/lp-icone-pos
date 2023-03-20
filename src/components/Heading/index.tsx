import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'primary' | 'white';
};

const Heading = ({ children, color = 'primary' }: HeadingProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
);

export default Heading;
