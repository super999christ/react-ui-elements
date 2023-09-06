import type { Meta, StoryObj } from '@storybook/react';

import SideNewsContainer from './SideNewsContainer';

const meta = {
  title: 'Pickleball/SideNewsContainer',
  component: SideNewsContainer,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof SideNewsContainer>;

export default meta;
type Story = StoryObj<typeof SideNewsContainer>;

export const Primary: Story = {
  args: {
    news: [
      {
        image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
        title: "Playing Pickleball 'Rehabilitates Your Brain'",
        description: "Do you ever hear someone talk, agree wholeheartedly with what they’re saying, until just one detail slips and you’re suddenly against them?",
        time: "7h - The Dink"
      },
      {
        image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
        title: "DUPR & MLP Partner on Collegiate and Youth Pickleball",
        description: "Major League Pickleball (MLP) and Dynamic Universal Pickleball Rating (DUPR) are expanding into organized collegiate and junior pickleball verticals.",
        time: "7h - The Dink"
      },
      {
        image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
        title: "Players Explain Their Awkward Pickleball Stories",
        description: "In a recent issue of our newsletter (to which you should totally subscribe!), we asked our audience to submit their stories about awkward pickleball situations.",
        time: "13h - PPP"
      }
    ]
  }
};
