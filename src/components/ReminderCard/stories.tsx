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
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
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

export const Basic: Story<ReminderCardProps> = (args) => (
  <ReminderCard {...args} />
);

export const Desktop: Story<ReminderCardProps> = (args) => (
  <ReminderCard {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
};
