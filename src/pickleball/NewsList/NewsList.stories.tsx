import type { Meta, StoryObj } from '@storybook/react';

import NewsList from './NewsList';

const meta = {
  title: 'Pickleball/NewsList',
  component: NewsList,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof NewsList>;

export default meta;
type Story = StoryObj<typeof NewsList>;

export const Primary: Story = {
  args: {
    newsList: [
      {
        title: "Third Shot Strategies in Mixed Doubles",
        link: "https://www.thedinkpickleball.com/third-shot-strategies-mixed-doubles/"
      },
      {
        title: "Performance Enhancing Drugs in Pro Pickleball?",
        link: "https://www.thedinkpickleball.com/performance-enhancing-drugs-in-pro-pickleball/"
      },
      {
        title: "Third Shot Strategies in Mixed Doubles",
        link: "https://www.thedinkpickleball.com/third-shot-strategies-mixed-doubles/"
      },
      {
        title: "DJ Young Fined for Paddle Throw, PPA Tour Announces",
        link: "https://www.thedinkpickleball.com/dj-young-fined-for-paddle-throw/"
      },
      {
        title: "May is National Pilates Month: Benefits for Your Pickleball Game",
        link: "https://www.thedinkpickleball.com/amazing-reformer-pilates-benefits/"
      },
      {
        title: "DUPR & MLP Partner on Collegiate and Youth Pickleball",
        link: "https://www.thedinkpickleball.com/dupr-mlp-collegiate-youth-pickleball/"
      },
      {
        title: "DUPR & MLP Partner on Collegiate and Youth Pickleball",
        link: "https://www.thedinkpickleball.com/dupr-mlp-collegiate-youth-pickleball/"
      },
      {
        title: "Third Shot Strategies in Mixed Doubles",
        link: "https://www.thedinkpickleball.com/third-shot-strategies-mixed-doubles/"
      },
      {
        title: "Performance Enhancing Drugs in Pro Pickleball?",
        link: "https://www.thedinkpickleball.com/performance-enhancing-drugs-in-pro-pickleball/"
      },
      {
        title: "Third Shot Strategies in Mixed Doubles",
        link: "https://www.thedinkpickleball.com/third-shot-strategies-mixed-doubles/"
      }
    ],
    seeAllLink: "https://www.thedinkpickleball.com/"
  }
};
