import type { Meta, StoryObj } from '@storybook/react';

import NewsCard from './NewsCard';

const meta = {
  title: 'Pickleball/NewsCard',
  component: NewsCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof NewsCard>;

export default meta;
type Story = StoryObj<typeof NewsCard>;

export const Primary: Story = {
  args: {
    image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
    title: "World No.1 Collin optimistic for 2023 despite elbow injury",
    description: "Taking to Twitter, Collin wrote, 'A couple of days off for sure. And booking my flight to Paris, so...fingers crossed, please! Hopefully, see you soon.'",
    time: "6h - The Dink"
  }
};

export const Secondary: Story = {
  args: {
    image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
    title: "World No.1 Collin optimistic for 2023 despite elbow injury",
    description: "Taking to Twitter, Collin wrote, 'A couple of days off for sure. And booking my flight to Paris, so...fingers crossed, please! Hopefully, see you soon.'",
    time: "6h - The Dink",
    video: true
  }
};
