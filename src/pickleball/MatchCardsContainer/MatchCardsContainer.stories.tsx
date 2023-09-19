import type { Meta, StoryObj } from '@storybook/react';

import MatchCardsContainer from './MatchCardsContainer';
import React from 'react';
import MatchCard from '../MatchCard/MatchCard';

const meta = {
  title: 'Pickleball/MatchCardsContainer',
  component: MatchCardsContainer,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof MatchCardsContainer>;

export default meta;
type Story = StoryObj<typeof MatchCardsContainer>;

export const Primary: Story = {
  args: {
    children: 
      <>
        <div className="w-full sm:w-[calc(50%-4px)]">
          <MatchCard
            className="w-full"
            compact
            court={12}
            round={3}
            matchTime="10:45 AM"
            detailsUrl={
              <a
                href="/"
                className="px-2 text-xs font-semibold text-experiment hover:underline"
              >
                See details
              </a>
            }
            teams={[
              {
                players: [{ id: 1, firstName: 'B', lastName: 'Jones' }],
                winningPercentage: 10,
                scores: [
                  {
                    value: 5,
                    winner: false,
                  },
                  {
                    value: 9,
                    winner: false,
                  },
                ],
              },
              {
                players: [{ id: 1, firstName: 'AJ', lastName: 'Koller' }],
                winningPercentage: 90,
                scores: [
                  {
                    value: 11,
                    winner: true,
                  },
                  {
                    value: 11,
                    winner: true,
                  },
                ],
              },
            ]}
            matchDateTime="Jun 16 - 10:00 AM EDT"
          />
        </div>
        <div className="w-full sm:w-[calc(50%-4px)]">
          <MatchCard
            className="w-full"
            compact
            court={12}
            round={3}
            matchTime="10:45 AM"
            detailsUrl={
              <a
                href="/"
                className="px-2 text-xs font-semibold text-experiment hover:underline"
              >
                See details
              </a>
            }
            teams={[
              {
                players: [{ id: 1, firstName: 'B', lastName: 'Jones' }],
                winningPercentage: 10,
                scores: [
                  {
                    value: 5,
                    winner: false,
                  },
                  {
                    value: 9,
                    winner: false,
                  },
                ],
              },
              {
                players: [{ id: 1, firstName: 'AJ', lastName: 'Koller' }],
                winningPercentage: 90,
                scores: [
                  {
                    value: 11,
                    winner: true,
                  },
                  {
                    value: 11,
                    winner: true,
                  },
                ],
              },
            ]}
            matchDateTime="Jun 16 - 10:00 AM EDT"
          />
        </div>
        <div className="w-full sm:w-[calc(50%-4px)]">
          <MatchCard
            className="w-full"
            compact
            court={12}
            round={3}
            matchTime="10:45 AM"
            detailsUrl={
              <a
                href="/"
                className="px-2 text-xs font-semibold text-experiment hover:underline"
              >
                See details
              </a>
            }
            teams={[
              {
                players: [{ id: 1, firstName: 'B', lastName: 'Jones' }],
                winningPercentage: 10,
                scores: [
                  {
                    value: 5,
                    winner: false,
                  },
                  {
                    value: 9,
                    winner: false,
                  },
                ],
              },
              {
                players: [{ id: 1, firstName: 'AJ', lastName: 'Koller' }],
                winningPercentage: 90,
                scores: [
                  {
                    value: 11,
                    winner: true,
                  },
                  {
                    value: 11,
                    winner: true,
                  },
                ],
              },
            ]}
            matchDateTime="Jun 16 - 10:00 AM EDT"
          />
        </div>
        <div className="w-full sm:w-[calc(50%-4px)]">
          <MatchCard
            className="w-full"
            compact
            court={12}
            round={3}
            matchTime="10:45 AM"
            detailsUrl={
              <a
                href="/"
                className="px-2 text-xs font-semibold text-experiment hover:underline"
              >
                See details
              </a>
            }
            teams={[
              {
                players: [{ id: 1, firstName: 'B', lastName: 'Jones' }],
                winningPercentage: 10,
                scores: [
                  {
                    value: 5,
                    winner: false,
                  },
                  {
                    value: 9,
                    winner: false,
                  },
                ],
              },
              {
                players: [{ id: 1, firstName: 'AJ', lastName: 'Koller' }],
                winningPercentage: 90,
                scores: [
                  {
                    value: 11,
                    winner: true,
                  },
                  {
                    value: 11,
                    winner: true,
                  },
                ],
              },
            ]}
            matchDateTime="Jun 16 - 10:00 AM EDT"
          />
        </div>
      </>
  }
};
