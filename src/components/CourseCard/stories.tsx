import { Meta, Story } from '@storybook/react';
import CourseCard, { CourseCardProps } from '.';

const props = {
  caption: 'Especialização em implantodontia',
  href: '#',
  img: 'https://source.unsplash.com/user/willianjusten/200x140'
};

export default {
  title: 'CourseCard',
  component: CourseCard,
  args: {
    ...props
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
