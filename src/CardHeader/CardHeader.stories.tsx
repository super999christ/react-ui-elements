import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardHeader from './CardHeader';

import AvatarOriginal from '../Avatar';
import Badge from '../Badge';
import Button from '../Button';
import Dropdown from '../Menu/Menu';

const meta = {
  title: 'Design System/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof CardHeader>;

export const WithBadgeAndDropdown: Story = {
  args: {
    Badge: () => <Badge label='10/20 Seats' className='!bg-primary-50 !text-primary-700' />,
    Dropdown: () => <Dropdown>...</Dropdown>,
    SupportingText: 'Manage your team members and their account permissions here.',
    Text: 'Team members',
    children:
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
  },
};

export const WithBadgeAndDropdownAndAvatar: Story = {
  args: {
    Avatar: () => <AvatarOriginal size='xl' />,
    Badge: () => <Badge label='New user' className='!bg-primary-50 !text-primary-700' />,
    Dropdown: () => <Dropdown>...</Dropdown>,
    SupportingText: 'olivia@untitledui.com',
    Text: 'Olivia Rhye',
    children:
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
  },
};

export const WithBadgeAndHeaderLine: Story = {
  args: {
    Badge: () => <Badge label='10/20 Seats' className='!bg-primary-50 !text-primary-700' />,
    SupportingText: 'Manage your team members and their account permissions here.',
    Text: 'Team members',
    withHeaderLine: true,
    children: 
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>,
  },
};

export const WithBadgeAndAvatarAndHeaderLine: Story = {
  args: {
    Avatar: () => <AvatarOriginal size='xl' />,
    Badge: () => <Badge label='New user' className='!bg-primary-50 !text-primary-700' />,
    SupportingText: 'olivia@untitledui.com',
    Text: 'Olivia Rhye',
    withHeaderLine: true,
    children: 
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>,
  },
};

export const WithBadgeAndAvatarAndCustomHeaderLine: Story = {
  args: {
    Avatar: () => <AvatarOriginal size='xl' />,
    Badge: () => <Badge label='New user' className='!bg-primary-50 !text-primary-700' />,
    SupportingText: 'olivia@untitledui.com',
    Text: 'Olivia Rhye',
    withHeaderLine: true,
    children: 
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>,
    className: '!border-t-error-500'
  },
};

export const WithDropdown: Story = {
  args: {
    Dropdown: () => <Dropdown>...</Dropdown>,
    SupportingText: 'Manage your team members and their account permissions here.',
    Text: 'Team members',
    children:
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
  },
};

export const WithDropdownAndAvatar: Story = {
  args: {
    Avatar: () => <AvatarOriginal size='xl' />,
    Dropdown: () => <Dropdown>...</Dropdown>,
    SupportingText: 'olivia@untitledui.com',
    Text: 'Olivia Rhye',
    children:
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
  },
};

export const WithHeaderLine: Story = {
  args: {
    SupportingText: 'Manage your team members and their account permissions here.',
    Text: 'Team members',
    withHeaderLine: true,
    children: 
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>,
  },
};

export const WithAvatarAndHeaderLine: Story = {
  args: {
    Avatar: () => <AvatarOriginal size='xl' />,
    SupportingText: 'olivia@untitledui.com',
    Text: 'Olivia Rhye',
    withHeaderLine: true,
    children: 
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>,
  },
};

export const WithAvatarAndCustomHeaderLine: Story = {
  args: {
    Avatar: () => <AvatarOriginal size='xl' />,
    SupportingText: 'olivia@untitledui.com',
    Text: 'Olivia Rhye',
    withHeaderLine: true,
    children: 
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>,
    className: '!border-t-success-500'
  },
};
