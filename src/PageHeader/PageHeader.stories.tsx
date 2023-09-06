import type { Meta, StoryObj } from '@storybook/react';

import PageHeader from './PageHeader';

const meta = {
  title: 'Design System/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Primary: Story = {
  args: {},
};