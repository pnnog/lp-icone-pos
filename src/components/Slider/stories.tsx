import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Slider, { SliderProps, SliderSettings } from '.';

export default {
  title: 'Slider',
  component: Slider
} as Meta;

const SliderStyles = styled.div`
  background-color: #a699ca;
  text-align: center;
  padding: 10rem 0;
  color: white;
  font-size: 3rem;
  border: 0.1rem solid lightgreen;
  height: 30rem;
`;

const horizontalSettings: SliderSettings = {
  slidesToShow: 1,
  infinite: true,
  dots: true
};

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={horizontalSettings}>
    <SliderStyles> Slide 1</SliderStyles>
    <SliderStyles> Slide 2</SliderStyles>
    <SliderStyles> Slide 3</SliderStyles>
  </Slider>
);

const verticalSettings: SliderSettings = {
  verticalSwiping: true,
  vertical: true,
  slidesToShow: 1,
  infinite: true,
  dots: true
};

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <SliderStyles> Slide 1 </SliderStyles>
    <SliderStyles> Slide 2 </SliderStyles>
    <SliderStyles> Slide 3 </SliderStyles>
  </Slider>
);
