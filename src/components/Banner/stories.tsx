import { Meta, Story } from '@storybook/react';
import Banner, { BannerProps } from '.';
import MockBanner from './mock';

export default {
  title: 'Banner',
  component: Banner,
  args: {}
} as Meta;

export const Default: Story<BannerProps> = (args) => <Banner {...args} />;
Default.args = {
  img: MockBanner.img
};

export const WithReminder: Story<BannerProps> = (args) => <Banner {...args} />;

WithReminder.args = {
  ...MockBanner
};
