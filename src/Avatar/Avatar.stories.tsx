import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '.';

const meta = {
  title: 'Design System/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    active: { control: 'boolean' },
    focusable: { control: 'boolean' },
    imageUrl: { control: 'text' },
    onlineIndicator: { control: 'boolean' },
    size: { control: 'select' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    active: true,
    focusable: true,
    onlineIndicator: true,
    size: 'md',
  },
};
