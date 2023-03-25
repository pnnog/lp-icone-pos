import { Meta, Story } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Footer',
  component: Footer
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ width: '43rem' }}>
    <Footer {...args} />
  </div>
);

export const Desktop: Story = (args) => <Footer {...args} />;
