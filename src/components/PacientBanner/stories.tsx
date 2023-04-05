import { Meta, Story } from '@storybook/react';

import PacientBanner, { PacientBannerProps } from '.';
import MockBannerPacient from './mock';

export default {
  title: 'PacientBanner',
  component: PacientBanner,
  args: { ...MockBannerPacient },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<PacientBannerProps> = (args) => (
  <PacientBanner {...args} />
);
