import { Meta, Story } from '@storybook/react';
import mock from './mock';
import CourseBanner, { courseBannerProps } from '.';

export default {
  title: 'Courses/CourseBanner',
  component: CourseBanner,
  args: { ...mock },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<courseBannerProps> = (args) => (
  <CourseBanner {...args} />
);
