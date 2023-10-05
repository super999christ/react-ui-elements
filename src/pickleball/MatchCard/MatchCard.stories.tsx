import type { Meta, StoryObj } from "@storybook/react";

import MatchCard from "./MatchCard";
import React from "react";
import moment from "moment";

const MatchCards = () => {
  const data = [
    {
      id: "2133203b-9721-40d1-99ff-b69dfdea1230",
      tournament: "Gigi Training Demo Tournament",
      event: "Mixed Doubles **DOUBLE ELIMINATION*",
      round: 3,
      matchDateTime: "2023-10-04T00:30:31Z",
      teams: [
        {
          players: [
            {
              id: "FC609553-FA23-4964-A7A7-33C2A8E60400",
              firstName: "Mary Ann",
              lastName: "Opper",
            },
            {
              id: "april",
              firstName: "april",
              lastName: "april",
            },
          ],
          scores: [
            {
              value: 11,
              winner: true,
            },
            {
              value: 11,
              winner: true,
            },
            {
              value: 0,
              winner: false,
            },
          ],
          matchCompletedType: 5,
          winningPercentage: 59,
        },
        {
          players: [
            {
              id: "5975BF2E-DC4B-46DF-A073-5942AA145F9C",
              firstName: "hampshire",
              lastName: "hampshire",
            },
            {
              id: "alabama",
              firstName: "alabama",
              lastName: "alabama",
            },
          ],
          scores: [
            {
              value: 0,
              winner: false,
            },
            {
              value: 0,
              winner: false,
            },
            {
              value: 0,
              winner: false,
            },
          ],
          matchCompletedType: 5,
          winningPercentage: 41,
        },
      ],
    },
    {
      id: "da28e0ad-4ad7-496c-91e4-37cb68fd1f9a",
      tournament: "Gigi Training Demo Tournament",
      event: "Mixed Doubles **DOUBLE ELIMINATION*",
      round: 2,
      matchDateTime: "2023-10-04T00:30:22Z",
      teams: [
        {
          players: [
            {
              id: "FC9DF122-68CC-4855-8817-8AD3AB6B29B3",
              firstName: "smith",
              lastName: "smith",
            },
            {
              id: "buffalo",
              firstName: "buffalo",
              lastName: "buffalo",
            },
          ],
          scores: [
            {
              value: 11,
              winner: true,
            },
            {
              value: 11,
              winner: true,
            },
            {
              value: 0,
              winner: false,
            },
          ],
          matchCompletedType: 5,
          winningPercentage: 66,
        },
        {
          players: [
            {
              id: "BE617BE7-FC02-49AC-823A-E6C67C88D89C",
              firstName: "indiana",
              lastName: "indiana",
            },
            {
              id: "aqua",
              firstName: "aqua",
              lastName: "aqua",
            },
          ],
          scores: [
            {
              value: 0,
              winner: false,
            },
            {
              value: 0,
              winner: false,
            },
            {
              value: 0,
              winner: false,
            },
          ],
          matchCompletedType: 5,
          winningPercentage: 34,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {data.map((match) => (
        <MatchCard
          key={match.id}
          className="block"
          tournament={match?.tournament}
          compact
          teams={match?.teams}
          matchDateTime={moment(match?.matchDateTime).format(
            "MMM D - h:mm A z"
          )}
        />
      ))}
    </div>
  );
};

const meta = {
  title: "Pickleball/MatchCard",
  component: MatchCards,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof MatchCards>;

export default meta;
type Story = StoryObj<typeof MatchCards>;

export const Primary: Story = {
  
};
