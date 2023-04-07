import { Meta, Story } from '@storybook/react';
import ButtonLink, { ButtonLinkProps } from '.';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  args: {
    href: 'https://www.google.com.br'
  },

  argTypes: {
    children: { type: 'string' }
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
  children: 'Ver mais'
};

export const WithIcon: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
);

export const FullWidth: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
);

FullWidth.args = {
  children: 'Inscreva-se',
  fullWidth: true
};
