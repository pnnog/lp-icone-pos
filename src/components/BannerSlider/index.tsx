import Banner, { BannerProps } from 'components/Banner';
import {
  ArrowDownward as ArrowNext,
  ArrowUpward as ArrowPrev
} from '@styled-icons/material-outlined';
import * as S from './styles';
import Slider, { SliderSettings } from 'components/Slider';
export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  slidesToShow: 1,
  dots: true,
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  arrows: true,
  nextArrow: <ArrowNext aria-label="Next Banner Slide" />,
  prevArrow: <ArrowPrev aria-label="Previous Banner Slide" />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        arrows: false
      }
    }
  ]
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default BannerSlider;
