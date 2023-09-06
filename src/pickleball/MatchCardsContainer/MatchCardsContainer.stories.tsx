import type { Meta, StoryObj } from '@storybook/react';

import MatchCardsContainer from './MatchCardsContainer';

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
  args: {}
};
