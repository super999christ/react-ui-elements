import type { Meta, StoryObj } from '@storybook/react';

import Partners from './Partners';

const meta = {
  title: 'Pickleball/Partners',
  component: Partners,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Partners>;

export default meta;
type Story = StoryObj<typeof Partners>;

export const Primary: Story = {
  args: {
    partners: [
      {
        logo: "https://assets.fastly.carvana.io/traffic-assets/branding/png/PrimaryLogo-GrayText.png",
        link: "https://www.carvana.com/"
      },
      {
        logo: "https://www.rwbaird.com/globalassets/baird-logo-2022.svg",
        link: "https://www.rwbaird.com/"
      },
      {
        logo: "https://www.cibc.com/content/dam/global-assets/logos/cibc-logos/no-tagline/cibc-logo-colour-142x36.svg",
        link: "https://www.cibc.com/en/personal-banking.html"
      }
    ]
  }
};

export const Secondary: Story = {
  args: {
    partners: [
      {
        logo: "https://www.rwbaird.com/globalassets/baird-logo-2022.svg",
        link: "https://www.rwbaird.com/"
      }
    ]
  }
};
