import type { Meta, StoryObj } from '@storybook/react';

import ResultCard from './ResultCard';

const meta = {
  title: 'Pickleball/ResultCard',
  component: ResultCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ResultCard>;

export default meta;
type Story = StoryObj<typeof ResultCard>;

export const Primary: Story = {
  args: {
    name: "PPA Tour: Atlanta Open",
    gradient: "linear-gradient(90deg, #F05235 0%, #F0821F 100%)",
    link: "https://www.pickleballtournaments.com/tournamentinfo.pl?tid=7974",
    match: {
      team1: [
        {
          firstName: "J",
          lastName: "Collin",
          img: "https://www.ppatour.com/wp-content/uploads/2023/06/Collin-Johns-HS-1.png"
        }
      ],
      team2: [
        {
          firstName: "N",
          lastName: "Riley",
          img: "https://www.ppatour.com/wp-content/uploads/2023/06/Riley-Newman-HS.png"
        }
      ],
      winner: "team1",
      result: [
        {
          team1: 11,
          team2: 4
        },
        {
          team1: 9,
          team2: 11
        },
        {
          team1: 11,
          team2: 2
        }
      ]
    }
  }
};

export const Secondary: Story = {
  args:  {
    name: "PPA Tour: Texas Open",
    category: "Golden Ticket Qualifier",
    gradient: "linear-gradient(90deg, #898E9C 0%, #151C3C 100%)",
    link: "https://www.pickleballtournaments.com/tournamentinfo.pl?tid=7470",
    match: {
      team1: [
        {
          firstName: "W",
          lastName: "Anna",
          img: "https://www.ppatour.com/wp-content/uploads/2023/06/Catherine-Parenteau-HS.png"
        },
        {
          firstName: "S",
          lastName: "Callie",
          img: "https://www.ppatour.com/wp-content/uploads/2023/06/Anna-Leigh-Waters-HS.png"
        }
      ],
      team2: [
        {
          firstName: "K",
          lastName: "Lucy",
          img: "https://www.ppatour.com/wp-content/uploads/2023/06/lucy-headshot-e1654201944791-removebg-preview.png"
        },
        {
          firstName: "A",
          lastName: "Mira",
          img: "https://www.ppatour.com/wp-content/uploads/2023/06/Callie-Smith-HS-768x768-1.png"
        }
      ],
      winner: "team2",
      result: [
        {
          team1: 3,
          team2: 11
        },
        {
          team1: 5,
          team2: 11
        },
        {
          team1: 5,
          team2: 11
        }
      ]
    }
  }
};
