// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import MatchCard from './MatchCard';

const meta: Meta<typeof MatchCard> = {
  component: MatchCard,
  title: 'Pickleball/Match/Card',
};

export default meta;
type Story = StoryObj<typeof MatchCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    compact: true,
    court: 3,
    matchNumber: 12,
    matchTime: new Date(),
    round: 3,
    style: { minWidth: 420 },
  },
};
