import { CalendarMonth as DateIcon } from '@styled-icons/material-outlined';
import ButtonLink from 'components/ButtonLink';
import * as S from './styles';

export type ReminderCardProps = {
  date?: string;
  title?: string;
  teacher?: string;
};

const ReminderCard = ({ date, title, teacher }: ReminderCardProps) => (
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
    <ButtonLink fullWidth>Inscreva-se</ButtonLink>
  </S.Wrapper>
);

export default ReminderCard;
