import { Meta, Story } from '@storybook/react';
import NewsCard, { NewsCardProps } from '.';

import mock from './mock';

export default {
  title: 'NewsCard',
  component: NewsCard,
  args: {
    ...mock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'icone-white'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta;

export const Mobile: Story<NewsCardProps> = (args) => <NewsCard {...args} />;
