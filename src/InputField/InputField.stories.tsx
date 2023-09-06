import type { Meta, StoryObj } from '@storybook/react';

import InputField from './InputField';

const meta = {
  title: 'Design System/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    onChange: undefined,
  },
};
