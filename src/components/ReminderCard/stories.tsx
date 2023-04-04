import { Meta, Story } from '@storybook/react';
import ReminderCard, { ReminderCardProps } from '.';
import MockReminderCard from './mock';

export default {
  title: 'ReminderCard',
  component: ReminderCard,

  args: { ...MockReminderCard },

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
      height: '60rem'
    }}
  >
    <ReminderCard {...args} />
  </div>
);
