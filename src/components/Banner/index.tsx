import * as S from './styles';
import ReminderCard, { ReminderCardProps } from 'components/ReminderCard';

export type BannerProps = {
  img: string;
  reminder?: boolean;
} & ReminderCardProps;

const Banner = ({ img, reminder, ...props }: BannerProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <S.Image src={img} alt={props.title} />
    </S.ImageWrapper>
    {!!reminder && <ReminderCard {...props} />}
  </S.Wrapper>
);

export default Banner;
