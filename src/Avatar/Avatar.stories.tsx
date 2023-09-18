import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '.';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoccerBall } from '@fortawesome/pro-light-svg-icons';

const meta = {
  title: 'Design System/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    active: { control: 'boolean' },
    focusable: { control: 'boolean' },
    imageUrl: { control: 'text' },
    onlineIndicator: { control: 'boolean' },
    size: { control: 'select' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicXS: Story = {
  args: {
    focusable: false,
    size: 'xs',
  },
};

export const FocusableSM: Story = {
  args: {
    focusable: true,
    size: 'sm',
  },
};

export const ActiveMD: Story = {
  args: {
    active: true,
    size: 'md',
  },
};

export const OnlineLG: Story = {
  args: {
    onlineIndicator: true,
    size: 'lg'
  },
};

export const NotOnlineXL: Story = {
  args: {
    size: 'xl',
    onlineIndicator: false
  },
};

export const ActiveAndOnline2XL: Story = {
  args: {
    active: true,
    onlineIndicator: true,
    size: '2xl'
  },
};

export const ActiveButNotOnline2XL: Story = {
  args: {
    active: true,
    onlineIndicator: false,
    size: '2xl'
  },
};

export const WithImage3XL: Story = {
  args: {
    size: '3xl',
    imageUrl: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png'
  },
};

export const OnlineWithImage3XL: Story = {
  args: {
    size: '3xl',
    onlineIndicator: true,
    imageUrl: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png'
  },
};

export const NotOnlineWithImage3XL: Story = {
  args: {
    size: '3xl',
    onlineIndicator: false,
    imageUrl: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png'
  },
};

export const ActiveWithImage3XL: Story = {
  args: {
    active: true,
    imageUrl: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png',
    size: '3xl',
  },
};

export const ActiveAndOnlineWithImage3XL: Story = {
  args: {
    active: true,
    onlineIndicator: true,
    imageUrl: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png',
    size: '3xl'
  },
};

export const ActiveButNotOnlineWithImage3XL: Story = {
  args: {
    active: true,
    onlineIndicator: false,
    imageUrl: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png',
    size: '3xl'
  },
};

export const WithCustomIcon4XL: Story = {
  args: {
    size: '4xl',
    customIconRender: () => <FontAwesomeIcon icon={faSoccerBall} className='text-primary-500 w-1/2 h-1/2' />
  },
};
