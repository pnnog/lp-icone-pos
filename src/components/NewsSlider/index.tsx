import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';
import NewsCard, { NewsCardProps } from 'components/NewsCard';

import {
  ArrowDownward as NextArrowIcon,
  ArrowUpward as PrevArrowIcon
} from '@styled-icons/material-outlined';

type NewsSliderSettings = SliderSettings;

const settings: NewsSliderSettings = {
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  nextArrow: <NextArrowIcon />,
  prevArrow: <PrevArrowIcon />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.8
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.5
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.8
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.4
      }
    }
  ]
};

export type NewsSliderProps = {
  items: NewsCardProps[];
};
const NewsSlider = ({ items }: NewsSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <NewsCard key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default NewsSlider;
