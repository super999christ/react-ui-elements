import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination';

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
 
};
