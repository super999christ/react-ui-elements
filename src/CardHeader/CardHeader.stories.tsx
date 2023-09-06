import type { Meta, StoryObj } from '@storybook/react';

import CardHeader from './CardHeader';

const meta = {
  title: 'Design System/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof CardHeader>;

export const Primary: Story = {
  args: {},
};