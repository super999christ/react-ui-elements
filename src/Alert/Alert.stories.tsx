import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  title: 'Design System/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {},
};