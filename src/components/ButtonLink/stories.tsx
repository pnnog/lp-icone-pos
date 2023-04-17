import { Meta, Story } from '@storybook/react';
import ButtonLink, { ButtonLinkProps } from '.';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  args: {},

  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta;

export const Normal: Story<ButtonLinkProps> = (args) => <ButtonLink {...args}>Ver mais</ButtonLink>;
