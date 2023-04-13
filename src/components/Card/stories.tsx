import { Meta, Story } from '@storybook/react';
import { mockPacientCards } from './mock';
import Card, { CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
  args: { ...mockPacientCards[0] },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: 'auto', paddingTop: '10rem' }}>
    <Card {...args} />
  </div>
);
