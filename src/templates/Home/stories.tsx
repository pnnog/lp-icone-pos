import { Meta, Story } from '@storybook/react';
import Home from '.';

export default {
  title: 'Home',
  component: Home,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story = (args) => <Home {...args} />;
