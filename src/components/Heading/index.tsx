import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'primary' | 'white' | 'orange';
  line?: 'left' | 'bottom';
};

const Heading = ({
  children,
  color = 'primary',
  line = 'left'
}: HeadingProps) => (
  <S.Wrapper line={line} color={color}>
    {children}
  </S.Wrapper>
);

export default Heading;
