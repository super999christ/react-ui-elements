import type { Meta, StoryObj } from '@storybook/react';

import ProgressCircle from './ProgressCircle';

const meta = {
  title: 'Design System/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const CircleXXS: Story = {
  args: {
    progress: 40,
    shape: 'circle',
    size: 'xxs',
  },
};

export const CircleXS: Story = {
  args: {
    progress: 40,
    shape: 'circle',
    size: 'xs',
  },
};

export const CircleSM: Story = {
  args: {
    progress: 40,
    shape: 'circle',
    size: 'sm'
  },
};

export const CircleMD: Story = {
  args: {
    progress: 40,
    shape: 'circle',
    size: 'md'
  },
};

export const CircleLG: Story = {
  args: {
    progress: 40,
    shape: 'circle',
    size: 'lg'
  },
};

export const CircleXXSWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'circle',
    size: 'xxs',
  },
};

export const CircleXSWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'circle',
    size: 'xs',
  },
};

export const CircleSMWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'circle',
    size: 'sm',
  },
};

export const CircleMDWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'circle',
    size: 'md',
  },
};

export const CircleLGWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'circle',
    size: 'lg',
  },
};

export const HalfCircleXXS: Story = {
  args: {
    progress: 40,
    shape: 'half-circle',
    size: 'xxs',
  },
};

export const HalfCircleXS: Story = {
  args: {
    progress: 40,
    shape: 'half-circle',
    size: 'xs'
  },
};


export const HalfCircleSM: Story = {
  args: {
    progress: 40,
    shape: 'half-circle',
    size: 'sm'
  },
};

export const HalfCircleMD: Story = {
  args: {
    progress: 40,
    shape: 'half-circle',
    size: 'md'
  },
};

export const HalfCircleLG: Story = {
  args: {
    progress: 40,
    shape: 'half-circle',
    size: 'lg'
  },
};

export const HalfCircleXXSWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'half-circle',
    size: 'xxs',
  },
};

export const HalfCircleXSWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'half-circle',
    size: 'xs',
  },
};

export const HalfCircleSMWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'half-circle',
    size: 'sm',
  },
};

export const HalfCircleMDWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'half-circle',
    size: 'md',
  },
};

export const HalfCircleLGWithLabel: Story = {
  args: {
    label: 'Active users',
    progress: 40,
    shape: 'half-circle',
    size: 'lg',
  },
};
