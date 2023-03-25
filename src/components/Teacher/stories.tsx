import { Meta, Story } from '@storybook/react';
import Teacher, { TeacherProps } from '.';

export default {
  title: 'Teacher',
  component: Teacher,

  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x400',
    name: 'Dr. Márcio Machionni'
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    },
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Mobile: Story<TeacherProps> = (args) => <Teacher {...args} />;
