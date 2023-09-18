import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import React from 'react';

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary'
  }
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    disabled: true
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
};

export const SecondaryColor: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary-color'
  }
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
};

export const TertiaryColor: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary-color'
  }
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link'
  }
};

export const LinkGray: Story = {
  args: {
    children: 'Link',
    variant: 'link-gray'
  }
};

export const DesctructivePrimary: Story = {
  args: {
    children: 'Primary',
    destructive: true,
    variant: 'primary',
  }
};

export const DesctructiveSecondary: Story = {
  args: {
    children: 'Secondary',
    destructive: true,
    variant: 'secondary',
  }
};

export const DesctructiveSecondaryDisabled: Story = {
  args: {
    children: 'Secondary',
    destructive: true,
    variant: 'secondary',
    disabled: true
  }
};

export const DesctructiveSecondaryColor: Story = {
  args: {
    children: 'Secondary',
    destructive: true,
    variant: 'secondary-color'
  }
};

export const DesctructiveTertiary: Story = {
  args: {
    children: 'Tertiary',
    destructive: true,
    variant: 'tertiary'
  }
};

export const DesctructiveTertiaryColor: Story = {
  args: {
    children: 'Tertiary',
    destructive: true,
    variant: 'tertiary-color'
  }
};

export const DesctructiveLink: Story = {
  args: {
    children: 'Link',
    destructive: true,
    variant: 'link'
  }
};

export const DesctructiveLinkGray: Story = {
  args: {
    children: 'Link',
    destructive: true,
    variant: 'link-gray'
  }
};

export const PrimaryWithIcons: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const SecondaryWithIcons: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const SecondaryColorWithIcons: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary-color',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const TertiaryWithIcons: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const TertiaryColorWithIcons: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary-color',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const LinkWithIcons: Story = {
  args: {
    children: 'Link',
    variant: 'link',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const LinkGrayWithIcons: Story = {
  args: {
    children: 'Link',
    variant: 'link-gray',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const DesctructivePrimaryWithIcons: Story = {
  args: {
    children: 'Primary',
    destructive: true,
    variant: 'primary',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const DesctructiveSecondaryWithIcons: Story = {
  args: {
    children: 'Secondary',
    destructive: true,
    variant: 'secondary',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const DesctructiveSecondaryColorWithIcons: Story = {
  args: {
    children: 'Secondary',
    destructive: true,
    variant: 'secondary-color',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const DesctructiveTertiaryWithIcons: Story = {
  args: {
    children: 'Tertiary',
    destructive: true,
    variant: 'tertiary',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const DesctructiveTertiaryColorWithIcons: Story = {
  args: {
    children: 'Tertiary',
    destructive: true,
    variant: 'tertiary-color',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const DesctructiveLinkWithIcons: Story = {
  args: {
    children: 'Link',
    destructive: true,
    variant: 'link',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};

export const DesctructiveLinkGrayWithIcons: Story = {
  args: {
    children: 'Link',
    destructive: true,
    variant: 'link-gray',
    prefixIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    suffixIcon: <FontAwesomeIcon icon={faArrowRight} />
  }
};
