import ButtonLink from 'components/ButtonLink';
import * as S from './styles';
import { EventAvailable as EventIcon } from '@styled-icons/material-outlined';
import { Schedule as ClockIcon } from '@styled-icons/material-outlined';

type BannerInfoProps = {
  title: string;
  description?: string;
};

export type courseBannerProps = {
  img: string;
  title: string;
  beginning: BannerInfoProps;
  workload: BannerInfoProps;
};

const CourseBanner = ({
  img,
  title,
  beginning,
  workload
}: courseBannerProps) => (
  <S.Wrapper img={img}>
    <S.Title>{title}</S.Title>

    <S.InfoWrapper>
      <S.Info>
        <S.IconWrapper>
          <EventIcon />
        </S.IconWrapper>
        <S.InfoContent>
          <S.InfoTitle>{beginning.title}</S.InfoTitle>
          <S.InfoDescription>{beginning.description}</S.InfoDescription>
        </S.InfoContent>
      </S.Info>

      <S.Info>
        <S.IconWrapper>
          <ClockIcon />
        </S.IconWrapper>
        <S.InfoContent>
          <S.InfoTitle>{workload.title}</S.InfoTitle>
          <S.InfoDescription>{workload.description}</S.InfoDescription>
        </S.InfoContent>
      </S.Info>
    </S.InfoWrapper>

    <ButtonLink href="#price-card" fullWidth>
      Quero estudar na Ícone
    </ButtonLink>
  </S.Wrapper>
);

export default CourseBanner;
