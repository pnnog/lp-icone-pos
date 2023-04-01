import { Meta, Story } from '@storybook/react';
import NewsCard, { NewsCardProps } from '.';

export default {
  title: 'NewsCard',
  component: NewsCard,
  args: {
    href: '/',
    img: 'https://source.unsplash.com/user/willianjusten/400x400',
    date: '1 fev 2019',
    title:
      'Aluna Mirella Martins Costa recebe prêmio de honra ao mérito científico.'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'white'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta;

export const Mobile: Story<NewsCardProps> = (args) => <NewsCard {...args} />;
