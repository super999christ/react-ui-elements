import type { Meta, StoryObj } from '@storybook/react';

import Standings from './Standings';

const meta = {
  title: 'Pickleball/Standings',
  component: Standings,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Standings>;

export default meta;
type Story = StoryObj<typeof Standings>;

export const Primary: Story = {
  args: {
    rows: [
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Riley-Newman-HS.png",
        name: "Nicole",
        surname: "Riley",
        wins: "44",
        loses: "12",
        last10Wins: "11",
        last10Loses: "2"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Anna-Leigh-Waters-HS.png",
        name: "Jessica",
        surname: "Doe",
        wins: "42",
        loses: "32",
        last10Wins: "7",
        last10Loses: "3"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Catherine-Parenteau-HS.png",
        name: "Erica",
        surname: "Pegula",
        wins: "33",
        loses: "32",
        last10Wins: "5",
        last10Loses: "2"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Riley-Newman-HS.png",
        name: "Nicole",
        surname: "Riley",
        wins: "31",
        loses: "23",
        last10Wins: "5",
        last10Loses: "2"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Anna-Leigh-Waters-HS.png",
        name: "Jessica",
        surname: "Doe",
        wins: "30",
        loses: "22",
        last10Wins: "2",
        last10Loses: "4"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Catherine-Parenteau-HS.png",
        name: "Erica",
        surname: "Pegula",
        wins: "24",
        loses: "22",
        last10Wins: "0",
        last10Loses: "10"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Riley-Newman-HS.png",
        name: "Nicole",
        surname: "Riley",
        wins: "24",
        loses: "23",
        last10Wins: "6",
        last10Loses: "1"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Anna-Leigh-Waters-HS.png",
        name: "Jessica",
        surname: "Doe",
        wins: "22",
        loses: "19",
        last10Wins: "3",
        last10Loses: "8"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Catherine-Parenteau-HS.png",
        name: "Erica",
        surname: "Pegula",
        wins: "24",
        loses: "22",
        last10Wins: "11",
        last10Loses: "2"
      },
      {
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Riley-Newman-HS.png",
        name: "Nicole",
        surname: "Riley",
        wins: "20",
        loses: "5",
        last10Wins: "7",
        last10Loses: "3"
      }
    ],
    viewFullRankingLink: "https://www.thedinkpickleball.com/"
  }
};
