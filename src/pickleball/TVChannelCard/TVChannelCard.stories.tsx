import type { Meta, StoryObj } from '@storybook/react';

import TVChannelCard from './TVChannelCard';

const meta = {
  title: 'Pickleball/TVChannelCard',
  component: TVChannelCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof TVChannelCard>;

export default meta;
type Story = StoryObj<typeof TVChannelCard>;

export const Primary: Story = {
  args: {
    channelName: "CBS",
    channelLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/CBS_logo.svg/2560px-CBS_logo.svg.png",
    channelLink: "https://www.cbs.com/",
    dateString: "Wed, March 28",
    matches: ["B. Johns vs T. Mc Guffin, 7:30 pm ET", "A. Leigh Waters vs C. Parentau, 10:00 pm EST"]
  }
};

export const Secondary: Story = {
  args: {
    channelName: "CBS",
    channelLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/CBS_logo.svg/2560px-CBS_logo.svg.png",
    channelLink: "https://www.cbs.com/",
    dateString: "Wed, March 28",
    matches: ["B. Johns vs T. Mc Guffin, 7:30 pm ET", "A. Leigh Waters vs C. Parentau, 10:00 pm EST", "B. Johns vs T. Mc Guffin, 7:30 pm ET", "A. Leigh Waters vs C. Parentau, 10:00 pm EST"]
  }
};
