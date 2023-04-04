import { Meta, Story } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'icone-darkblue'
    }
  }
} as Meta;

export const Default: Story = (args) => <Footer {...args} />;
