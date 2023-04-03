import { Meta, Story } from '@storybook/react';
import TeacherGrid from '.';

export default {
  title: 'TeacherGrid',
  component: TeacherGrid,
  args: {
    title: 'Título padrão para todos os stories caso nada seja passado',
    description:
      'Description padrão para todos os stories caso nada seja passado'
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    },
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Basic: Story = (args) => <TeacherGrid {...args} />;