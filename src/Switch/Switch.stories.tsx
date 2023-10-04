import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

const SwitchWrapper = () => {
  const authorName = "Demo"
  const [checked, setChecked] = useState<boolean>()
  const derived = checked !== undefined ? checked : authorName && authorName.length > 0 ? true : !!authorName

  return <>
    <Switch size='xs' id="switch" checked={derived} onChange={(checked) => setChecked(checked)} />
  </>
}

const meta = {
  title: 'Design System/Switch',
  component: SwitchWrapper,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof SwitchWrapper>;

export default meta;
type Story = StoryObj<typeof SwitchWrapper>;

export const SwitchSM: Story = {
  args: {
    id: 'switch_1',
    size: 'sm',
    onChange: undefined
  }
};

