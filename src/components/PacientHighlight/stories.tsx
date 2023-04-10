import { Meta, Story } from '@storybook/react';

import PacientHighlight, { PacientHighlightProps } from '.';
import MockBannerPacient from './mock';

export default {
  title: 'PacientBanner',
  component: PacientHighlight,
  args: { ...MockBannerPacient },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<PacientHighlightProps> = (args) => (
  <PacientHighlight {...args} />
);
