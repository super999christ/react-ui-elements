import type { Meta, StoryObj } from '@storybook/react';

import ButtonsContainer from './ButtonsContainer';

const meta = {
  title: 'Pickleball/ButtonsContainer',
  component: ButtonsContainer,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ButtonsContainer>;

export default meta;
type Story = StoryObj<typeof ButtonsContainer>;

export const Primary: Story = {
  args: {
    buttons: [
      {
        text: "Watch Higlights",
        link: "https://www.youtube.com/watch?v=UF0i_EboHqA"
      },
    ]
  }
};

export const Secondary: Story = {
  args: {
    buttons: [
      {
        text: "Watch Higlights",
        link: "https://www.youtube.com/watch?v=UF0i_EboHqA"
      },
      {
        text: "Game Details",
        link: ""
      }
    ]
  }
};

export const Tertiary: Story = {
  args: {
    buttons: [
      {
        text: "Watch Higlights",
        link: "https://www.youtube.com/watch?v=UF0i_EboHqA"
      },
      {
        text: "Game Details",
        link: ""
      },
      {
        text: "Player Interview",
        link: ""
      }
    ]
  }
};
