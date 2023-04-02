import { Meta, Story } from '@storybook/react';
import CourseCardSlider, { CourseCardSliderProps } from '.';
import MockCourseCardSlider from './mock';

export default {
  title: 'CourseCardSlider',
  component: CourseCardSlider,
  args: {
    items: MockCourseCardSlider
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Default: Story<CourseCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '20rem auto' }}>
    <CourseCardSlider {...args} />
  </div>
);
