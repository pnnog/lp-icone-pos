import * as S from './styles';
import ReminderCard, { ReminderCardProps } from 'components/ReminderCard';

export type BannerProps = {
  img: string;
  reminder?: boolean;
} & ReminderCardProps;

const Banner = ({ img, reminder = false, ...props }: BannerProps) => (
  <S.Wrapper>
    <S.ImageWrapper img={img} aria-label={props.title} role="img" />
    {!!reminder && <ReminderCard {...props} />}
  </S.Wrapper>
);

export default Banner;
