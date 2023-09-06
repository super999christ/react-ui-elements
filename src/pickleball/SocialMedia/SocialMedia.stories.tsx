import type { Meta, StoryObj } from '@storybook/react';

import SocialMedia from './SocialMedia';

const meta = {
  title: 'Pickleball/SocialMedia',
  component: SocialMedia,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof SocialMedia>;

export default meta;
type Story = StoryObj<typeof SocialMedia>;

export const Primary: Story = {
  args: {
    socialMedias: [
      {
        name: "Facebook",
        link: "https://www.facebook.com"
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com"
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com"
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com"
      }
    ]
  }
};
