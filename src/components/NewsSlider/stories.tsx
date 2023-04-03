import { Meta, Story } from '@storybook/react';
import NewsSlider, { NewsSliderProps } from '.';
import MockNewsSlider from './mock';

export default {
  title: 'NewsSlider',
  component: NewsSlider,
  args: {
    items: MockNewsSlider
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<NewsSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <NewsSlider {...args} />{' '}
  </div>
);
