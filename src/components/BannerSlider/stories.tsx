import { Meta, Story } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from '.';
import MockBannerSlider from './mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items: MockBannerSlider },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Mobile: Story<BannerSliderProps> = (args) => (
  <div>
    <BannerSlider {...args} />
  </div>
);
