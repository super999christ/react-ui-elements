import type { Meta, StoryObj } from '@storybook/react';

import LoginCard from './LoginCard';

import pickleballTV from './../assets/pickleball-tv.svg';
import pickleballPlus from './../assets/pickleball-plus.svg';
import shutterstock1 from './../assets/shutterstock-1.png';
import shutterstock2 from './../assets/shutterstock-2.png';

import React from 'react';

const meta = {
  title: 'Pickleball/LoginCard',
  component: LoginCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof LoginCard>;

export default meta;
type Story = StoryObj<typeof LoginCard>;

export const Primary: Story = {
  args: {
    background: `url(${shutterstock1}) -408.803px -60.75px / 300% 146.546% no-repeat, #0A0026`,
    Logo: pickleballTV,
    text: "Don’t miss out on replays, higlights and much more with Pickleball TV!",
    button1Text: "Try Pickleball TV",
    button2Text: "Log in",
    learnMoreLink: "https://www.thedinkpickleball.com/"
  }
};

export const Secondary: Story = {
  args: {
    background: `url(${shutterstock2}) -297px -60.75px / 300% 137.5% no-repeat, #572BD6`,
    Logo: () => <img alt="Logo" src={pickleballPlus} className="max-h-[22px]" />,
    text: "Join Pickleball+ and get access to exclusive content, news, videos, and much more!",
    button1Text: "Sign up",
    button2Text: "Login",
    headlineText: "Pickleball+",
    learnMoreLink: "https://www.thedinkpickleball.com/"
  }
};

export const Tertiary: Story = {
  args: {
    background: "black",
    Logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png",
    text: "Don’t miss out on replays, higlights and much more with Spofity!",
    button1Text: "Try Spotify",
    button2Text: "Log in"
  }
};
