import { Meta, Story } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    title: 'Especialização implantodontia',
    img: 'https://source.unsplash.com/user/willianjusten/1040x495',
    date: '1/1/1',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: 'https://google.com.br'
  }
} as Meta;

export const Basic: Story<BannerProps> = (args) => <Banner {...args} />;
