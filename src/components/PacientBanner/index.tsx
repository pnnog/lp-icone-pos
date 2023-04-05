import ButtonLink from 'components/ButtonLink';
import * as S from './styles';

export type PacientBannerProps = Record<'title' | 'float' | 'img', string>;

const PacientBanner = ({ title, float, img }: PacientBannerProps) => (
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

export default PacientBanner;
