import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

const meta = {
  title: 'Design System/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    onChange: undefined,
  },
};
