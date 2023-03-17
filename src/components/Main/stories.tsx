import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';
import { MainProps } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default'
  },
  argTypes: {
    title: {
      type: 'string'
    }
  }
} as Meta;

export const Basic: Story<MainProps> = (args) => <Main {...args} />;
Basic.args = {
  title: 'Basic Title'
};

Basic.argTypes = {
  title: {
    type: 'string'
  }
};

export const Secondary: Story<MainProps> = (args) => <Main {...args} />;
Secondary.args = {
  title: 'Secondary Title'
};

Secondary.argTypes = {
  title: {
    type: 'string'
  }
};
