import { Meta, Story } from '@storybook/react';
import ReminderCard, { ReminderCardProps } from '.';

export default {
  title: 'ReminderCard',
  component: ReminderCard,

  args: {
    date: '29/03/2023',
    title: 'Especialização implantodontia',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: '#'
  },

  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    date: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    teacher: {
      type: 'string'
    }
  }
} as Meta;

export const Responsive: Story<ReminderCardProps> = (args) => (
  <div
    style={{
      display: 'relative',
      backgroundColor: 'grey',
      maxWidth: '144rem',
      height: '44rem'
    }}
  >
    <ReminderCard {...args} />
  </div>
);
