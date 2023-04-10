import ButtonLink from 'components/ButtonLink';
import * as S from './styles';

export type PacientHighlightProps = Record<'title' | 'float' | 'img', string>;

const PacientHighlight = ({ title, float, img }: PacientHighlightProps) => (
  <S.Wrapper src={img}>
    <S.FloatImageWrapper>
      <S.FloatImage src={float} alt={title} />
    </S.FloatImageWrapper>
    <S.Content>
      <S.Title> {title} </S.Title>
      <ButtonLink> Ver mais</ButtonLink>
    </S.Content>
  </S.Wrapper>
);

export default PacientHighlight;
