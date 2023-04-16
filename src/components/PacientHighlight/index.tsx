import ButtonLink from 'components/ButtonLink';
import * as S from './styles';
import Link from 'next/link';

export type PacientHighlightProps = Record<'title' | 'float' | 'img', string>;

const PacientHighlight = ({ title, float, img }: PacientHighlightProps) => (
  <S.Wrapper src={img}>
    <S.FloatImageWrapper>
      <S.FloatImage src={float} alt={title} />
    </S.FloatImageWrapper>
    <S.Content>
      <S.Title> {title} </S.Title>
      <Link href="/paciente" passHref legacyBehavior>
        <ButtonLink>Ver mais</ButtonLink>
      </Link>
    </S.Content>
  </S.Wrapper>
);

export default PacientHighlight;
