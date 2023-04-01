import { CalendarMonth as DateIcon } from '@styled-icons/material-outlined';
import ButtonLink from 'components/ButtonLink';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

export type ReminderCardProps = {
  date: string;
  title: string;
  teacher: string;
  href: string;
};

const ReminderCard = ({ date, title, teacher, href }: ReminderCardProps) => (
  <S.Wrapper>
    <S.DateWrapper>
      <DateIcon role="img" aria-label="Course Date" />
      <S.Date>
        <p> Inicio do curso</p>
        <span>{date}</span>
      </S.Date>
    </S.DateWrapper>
    <S.Title>{title}</S.Title>
    <S.Teacher>{teacher}</S.Teacher>
    <MediaMatch lessThan="medium">
      <ButtonLink href={href} size="medium" fullWidth>
        Inscreva-se
      </ButtonLink>
    </MediaMatch>

    <MediaMatch greaterThan="medium">
      <ButtonLink href="https://web.whatsapp.com/" size="large" fullWidth>
        Inscreva-se
      </ButtonLink>
    </MediaMatch>
  </S.Wrapper>
);

export default ReminderCard;
