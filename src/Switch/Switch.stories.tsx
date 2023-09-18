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

export const SwitchSM: Story = {
  args: {
    id: 'switch_1',
    size: 'sm',
    onChange: undefined
  }
};

export const SwitchSMDisabled: Story = {
  args: {
    id: 'switch_1',
    size: 'sm',
    disabled: true,
    onChange: undefined
  }
};

export const SwitchMD: Story = {
  args: {
    id: 'switch_2',
    size: 'md',
    onChange: undefined
  }
};

export const SwitchMDDisabled: Story = {
  args: {
    id: 'switch_2',
    size: 'md',
    disabled: true,
    onChange: undefined
  }
};

export const SwitchMDWithOffset: Story = {
  args: {
    id: 'switch_2',
    size: 'md',
    offset: 10, // Offset is for the inner floating circle
    onChange: undefined,
  }
};
