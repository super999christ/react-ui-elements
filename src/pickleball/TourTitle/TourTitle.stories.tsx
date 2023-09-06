import type { Meta, StoryObj } from '@storybook/react';

import TourTitle from './TourTitle';

const meta = {
  title: 'Pickleball/TourTitle',
  component: TourTitle,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof TourTitle>;

export default meta;
type Story = StoryObj<typeof TourTitle>;

export const Primary: Story = {
  args: {
    image: "https://mms.businesswire.com/media/20221005005303/en/1592481/5/Carvana-PPA-Tour-Primary-Lockup_Blue-RGB.jpg",
    title: "Reads PPA Tour: Texas Open"
  }
};

export const Secondary: Story = {
  args: {
    image: "https://mms.businesswire.com/media/20221005005303/en/1592481/5/Carvana-PPA-Tour-Primary-Lockup_Blue-RGB.jpg",
    title: "Reads PPA Tour: Texas Open",
    imagePosition: "right"
  }
};
