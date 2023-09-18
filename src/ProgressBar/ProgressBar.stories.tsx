import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './ProgressBar';

const meta = {
  title: 'Design System/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 40,
  },
};

export const LabelRight: Story = {
  args: {
    label: '50%',
    labelPlacement: 'right',
    progress: 50,
  },
};

export const LabelBottom: Story = {
  args: {
    label: '60%',
    labelPlacement: 'bottom',
    progress: 60,
  },
};

export const LabelRightInDifferentColor: Story = {
  args: {
    label: '70%',
    labelPlacement: 'right',
    progress: 70,
    progressColor: 'red',
    className: '!w-[400px]'
  },
};


export const LabelBottomInDifferentColor: Story = {
  args: {
    label: '80%',
    labelPlacement: 'bottom',
    progress: 80,
    progressColor: 'lime',
    className: '!w-[600px]'
  },
};
