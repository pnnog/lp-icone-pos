import {
  ArrowDownward as ArrowNext,
  ArrowUpward as ArrowPrev
} from '@styled-icons/material-outlined';

import CourseCard from 'components/CourseCard';
import { CourseCardProps } from 'components/CourseCard';
import Slider from 'components/Slider';
import { SliderSettings } from 'components/Slider';

import * as S from './styles';

type CourseCardSliderSettings = SliderSettings;
const settings: CourseCardSliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  slidesToShow: 3,
  prevArrow: <ArrowPrev />,
  nextArrow: <ArrowNext />,
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
        slidesToShow: 2.5
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1.8
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.4
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    }
  ]
};

export type CourseCardSliderProps = {
  items: CourseCardProps[];
};

const CourseCardSlider = ({ items }: CourseCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <CourseCard key={item.id} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default CourseCardSlider;
