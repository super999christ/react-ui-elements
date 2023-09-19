import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import Button from "../Button"

import Tooltip from './Tooltip';

const TooltipButton = () => {
  return <Tooltip>
    <Tooltip.Trigger><Button variant='primary'>Button CTA</Button></Tooltip.Trigger>
    <Tooltip.Content>Show something nice on hover!</Tooltip.Content>
  </Tooltip>
}

const meta = {
  title: 'Design System/Tooltip',
  component: TooltipButton,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {}
}
