import { Meta, Story } from '@storybook/react';
import ButtonLink, { ButtonLinkProps } from '.';
import { ArrowUpward } from '@styled-icons/material-outlined/ArrowUpward';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  args: {
    href: 'https://www.google.com.br'
  },

  argTypes: {
    fullWidth: { type: 'boolean' },
    href: { type: 'string' },
    children: { type: 'string' },
    icon: {
      table: {
        disable: true
      }
    }
  },

  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta;

export const Normal: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
);

Normal.args = {
  children: 'Ver mais',
  size: 'medium'
};

export const WithIcon: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
);

WithIcon.args = {
  icon: <ArrowUpward />
};

export const FullWidth: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
);

FullWidth.args = {
  children: 'Inscreva-se',
  fullWidth: true
};
