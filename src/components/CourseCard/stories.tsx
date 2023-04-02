import { Meta, Story } from '@storybook/react';
import CourseCard, { CourseCardProps } from '.';
import MockCourseCard from './mock';

export default {
  title: 'CourseCard',
  component: CourseCard,
  args: {
    ...MockCourseCard
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Mobile: Story<CourseCardProps> = (args) => (
  <CourseCard {...args} />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
