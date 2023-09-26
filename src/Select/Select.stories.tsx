import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import Select from '.';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const SelectPrimary = () => {
  return (
    <Select options={options} isMulti />
  )
}

const meta = {
  title: 'Design System/Select',
  component: SelectPrimary,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof SelectPrimary>;

export default meta;
type Story = StoryObj<typeof SelectPrimary>;

export const Primary: Story = {
  args: {},
};