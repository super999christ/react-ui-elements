import type { Meta, StoryObj } from '@storybook/react';

import ProgressCircle from './ProgressCircle';

const meta = {
  title: 'Design System/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Primary: Story = {
  args: {},
};