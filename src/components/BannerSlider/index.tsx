import {
  ArrowDownward as NextArrowIcon,
  ArrowUpward as PrevArrowIcon
} from '@styled-icons/material-outlined';

import Banner, { BannerProps } from 'components/Banner';
import Slider, { SliderSettings } from 'components/Slider';
import SlickButtonFix from 'utils/slick-button-fix';

import * as S from './styles';

const settings: SliderSettings = {
  slidesToShow: 1,
  dots: true,
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  arrows: true,
  nextArrow: (
    <SlickButtonFix>
      <NextArrowIcon aria-label="Next Banner Slide" />
    </SlickButtonFix>
  ),
  prevArrow: (
    <SlickButtonFix>
      <PrevArrowIcon aria-label="Next Banner Slide" />
    </SlickButtonFix>
  ),
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

export type BannerSliderProps = {
  items: BannerProps[];
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
