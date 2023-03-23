import { Meta, Story } from '@storybook/react';
import MediaMatch from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {}
} as Meta;

export const Basic: Story = (args) => <MediaMatch {...args} />;
