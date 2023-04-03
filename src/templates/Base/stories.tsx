import { Meta, Story } from '@storybook/react';
import Base, { BaseProps } from '.';

export default {
  title: 'Base',
  component: Base,
  args: {
    children: 'Conteúdo'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<BaseProps> = (args) => <Base {...args} />;
