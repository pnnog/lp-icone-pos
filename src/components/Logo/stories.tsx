import { Meta, Story } from '@storybook/react';
import Logo, { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    small: {
      type: 'boolean'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta;

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />;
