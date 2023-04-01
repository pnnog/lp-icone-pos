import { Today as DateIcon } from '@styled-icons/material-outlined';

import * as S from './styles';
import Link from 'next/link';

export type NewsCardProps = {
  img: string;
  date: string;
  title: string;
  href: string;
};

const NewsCard = ({ img, date, title, href }: NewsCardProps) => (
  <S.Wrapper>
    <Link href={href}>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.DateBox>
          <DateIcon role="img" aria-label="News date" />
          <S.Date> {date} </S.Date>
        </S.DateBox>
        <S.Title> {title} </S.Title>
      </S.Content>
    </Link>
  </S.Wrapper>
);

export default NewsCard;
