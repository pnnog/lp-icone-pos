import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from '.';

const props = {
  children: 'Corpo Docente'
};

export default {
  title: 'Heading',
  component: Heading,
  args: { ...props }
} as Meta;

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />;
