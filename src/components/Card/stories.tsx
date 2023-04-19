import { Meta, Story } from '@storybook/react';
import mock, { mockWIthModal } from './mock';
import Card, { CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
  args: { ...mock },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: 'auto', paddingTop: '10rem' }}>
    <Card {...args} />
  </div>
);

export const WithModal: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: 'auto', paddingTop: '10rem' }}>
    <Card {...args} />
  </div>
);

WithModal.args = {
  ...mockWIthModal
};
