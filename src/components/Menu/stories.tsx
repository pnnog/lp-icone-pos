import { Meta, Story } from '@storybook/react';
import Menu from '.';

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta;

export const Mobile: Story = (args) => <Menu {...args} />;
export const Desktop: Story = (args) => <Menu {...args} />;
Desktop.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
};
