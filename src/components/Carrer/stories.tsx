import { Meta, Story } from '@storybook/react';
import Carrer, { CarrerProps } from '.';
import mock from './mock';

export default {
  title: 'Teachers/Carrer',
  component: Carrer,
  args: { ...mock },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<CarrerProps> = (args) => (
  <div style={{ maxWidth: '103rem', margin: 'auto' }}>
    <Carrer {...args} />
  </div>
);
