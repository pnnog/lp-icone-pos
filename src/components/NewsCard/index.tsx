import { Today as DateIcon } from '@styled-icons/material-outlined';

import * as S from './styles';
import Link from 'next/link';

export type NewsCardProps = Record<'img' | 'date' | 'title' | 'href', string>;

const NewsCard = ({ img, date, title, href }: NewsCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.DateBox>
        <DateIcon role="img" aria-label="News date" />
        <S.Date> {date} </S.Date>
      </S.DateBox>
      <Link href={href}>
        <S.Title> {title} </S.Title>
      </Link>
    </S.Content>
  </S.Wrapper>
);

export default NewsCard;
