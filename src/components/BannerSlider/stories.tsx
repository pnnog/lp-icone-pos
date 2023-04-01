import { Meta, Story } from '@storybook/react';
import { BannerProps } from 'components/Banner';
import BannerSlider, { BannerSliderProps } from '.';

const itemsTest: BannerProps[] = [
  {
    reminder: true,
    title: 'Especialização implantodontia ',
    img: 'https://source.unsplash.com/user/willianjusten/1440x495',
    date: '25/03/2023',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: 'https://web.whatsapp.com'
  },

  {
    title: 'Aperfeiçoamento em implantodontia',
    img: 'https://source.unsplash.com/user/willianjusten/1440x496',
    date: '29/03/2023',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: 'https://web.whatsapp.com'
  },

  {
    title: 'Implantodontia ',
    img: 'https://source.unsplash.com/user/willianjusten/1440x497',
    date: '25/03/2024',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: 'https://web.whatsapp.com'
  }
];

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items: itemsTest },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Mobile: Story<BannerSliderProps> = (args) => (
  <div>
    <BannerSlider {...args} />
  </div>
);
