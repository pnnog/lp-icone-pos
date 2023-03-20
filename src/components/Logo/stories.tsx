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

export const Normal: Story<LogoProps> = (args) => <Logo {...args} />;
Normal.args = {
  small: false
};
export const Small: Story<LogoProps> = (args) => <Logo {...args} />;
Small.args = {
  small: true
};
