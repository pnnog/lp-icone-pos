import { Meta, Story } from '@storybook/react';
import CourseCard, { CourseCardProps } from '.';

const props = {
  title: 'Especialização em implantodontia',

  href: '#'
};

export default {
  title: 'CourseCard',
  component: CourseCard,
  args: {
    ...props
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
