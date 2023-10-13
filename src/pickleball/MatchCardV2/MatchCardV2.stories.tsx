import type { Meta, StoryObj } from "@storybook/react";

import MatchCardV2 from "./MatchCardV2";

const meta = {
  title: "Pickleball/MatchCardV2",
  component: MatchCardV2,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof MatchCardV2>;

export default meta;
type Story = StoryObj<typeof MatchCardV2>;

export const Default: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      matchNumber: 7,
      eventTitle: "Womens Singles",
      tournamentTitle: "PPA Tour: Texas Open - Golden Ticket Qualifier",
      courtNumber: 10,
      roundNumber: 3,
      matchTime: "10:45 AM",
      matchTimeStart: "Jun 16-11:00 AM",
      timezoneAbbreviation: "EDT",
      team1: {
        isWinner: true,
        percentage: 90,
        players: [
          { playerId: "1", name: "John Smith" },
        ],
        scores: [11, 10, 0],
      },
      team2: {
        players: [
          { playerId: "2", name: "Amelia Borges" },
        ],
        scores: [2, 5, 0],
      },
    },
  },
};
