import { Today as DateIcon } from '@styled-icons/material-outlined';

import * as S from './styles';

export type NewsCardProps = {
  img: string;
  date: string;
  title: string;
};

const NewsCard = ({ img, date, title }: NewsCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.DateBox>
        <DateIcon role="img" aria-label="News date" />
        <S.Date> {date} </S.Date>
      </S.DateBox>
      <S.Title href="#"> {title} </S.Title>
    </S.Content>
  </S.Wrapper>
);

export default NewsCard;
