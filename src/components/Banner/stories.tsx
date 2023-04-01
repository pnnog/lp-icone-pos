import { Meta, Story } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {}
} as Meta;

export const Default: Story<BannerProps> = (args) => <Banner {...args} />;
Default.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1040x495'
};

export const WithReminder: Story<BannerProps> = (args) => <Banner {...args} />;

WithReminder.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1040x495',
  reminder: true,
  title: 'Especialização implantodontia',
  date: '1/1/1',
  teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
  href: 'https://google.com.br'
};
