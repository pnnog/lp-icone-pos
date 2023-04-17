import { Meta, Story } from '@storybook/react';

import Highlight, { HighlightProps } from '.';
import MockBannerPacient from './mock';

export default {
  title: 'PacientBanner',
  component: Highlight,
  args: { ...MockBannerPacient },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />;
