import { Today as DateIcon } from '@styled-icons/material-outlined';

import * as S from './styles';
import Link from 'next/link';

export type NewsCardProps = Record<'img' | 'date' | 'title' | 'slug', string>;

const NewsCard = ({ img, date, title, slug }: NewsCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.DateBox>
        <DateIcon role="img" aria-label="News date" />
        <S.Date> {date} </S.Date>
      </S.DateBox>
      <Link href={slug}>
        <S.Title> {title} </S.Title>
      </Link>
    </S.Content>
  </S.Wrapper>
);

export default NewsCard;
