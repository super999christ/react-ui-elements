import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Badge from '.';

const meta = {
  title: 'Design System/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select' },
    variation: { control: 'select' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Label',
    size: 'lg',
    variation: 'primary',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithIcon: Story = {
  args: {
    label: 'Badge',
    icon: <FontAwesomeIcon icon={faTimes} />,
    size: 'lg',
    variation: 'primary',
  },
};
