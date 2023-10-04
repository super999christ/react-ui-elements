import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faX } from '@fortawesome/pro-solid-svg-icons';

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
export const GraySM: Story = {
  args: {
    label: 'Label',
    variation: 'gray',
    size: 'sm'
  },
};

export const PrimaryMD: Story = {
  args: {
    label: 'Label',
    variation: 'primary',
    size: 'md'
  },
};

export const ErrorLG: Story = {
  args: {
    label: 'Label',
    variation: 'error',
    size: 'lg'
  },
};

export const WarningSM: Story = {
  args: {
    label: 'Label',
    variation: 'warning',
    size: 'sm'
  },
};

export const SuccessMD: Story = {
  args: {
    label: 'Label',
    variation: 'success',
    size: 'md'
  },
};

export const GrayLGOutline: Story = {
  args: {
    label: 'Label',
    variation: 'gray',
    size: 'lg',
    className: 'border border-[1.5px] border-gray-600 !rounded-2xl'
  },
};

export const PrimarySMOutline: Story = {
  args: {
    label: 'Label',
    variation: 'primary',
    size: 'sm',
    className: 'border border-[1.5px] border-primary-600 !rounded-2xl'
  },
};

export const ErrorMDOutlineAndPrefixIcon: Story = {
  args: {
    label: 'Label',
    variation: 'error',
    size: 'md',
    className: 'border border-[1.5px] border-error-600 !rounded-2xl',
    prefixIcon: <FontAwesomeIcon icon={faCircle} className='w-2 h-2' />
  },
};

export const WarningLGOutlineAndIcon: Story = {
  args: {
    label: 'Label',
    variation: 'warning',
    size: 'lg',
    className: 'border border-[1.5px] border-warning-600 !rounded-2xl',
    icon: <FontAwesomeIcon icon={faX} className='w-2.5 h-2.5' />
  },
};
