import type { Meta, StoryObj } from '@storybook/react';

import Notification from './Notification';

const meta = {
  title: 'Design System/Notification',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  args: {},
};