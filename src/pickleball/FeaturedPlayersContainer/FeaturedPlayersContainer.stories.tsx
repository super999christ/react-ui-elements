import type { Meta, StoryObj } from '@storybook/react';

import FeaturedPlayersContainer from './FeaturedPlayersContainer';
import shutterstock2 from '../assets/shutterstock-2.png';

const meta = {
  title: 'Pickleball/FeaturedPlayersContainer',
  component: FeaturedPlayersContainer,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof FeaturedPlayersContainer>;

export default meta;
type Story = StoryObj<typeof FeaturedPlayersContainer>;

export const Primary: Story = {
  args: {
    players: [
      {
        background: `url(${shutterstock2}) -312px -60.75px / 334.962% 283.758% no-repeat, #572BD6`,
        name: "Dawson",
        surname: "Callan",
        country: "USA",
        countryImg: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041",
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Chuck-Taylor-HS-768x768-1.png",
        ranking: "12",
        points: "15,200",
        sponsorLogo: "https://franklinsports.com/static/version1689811570/frontend/Franklin/franklin_b2c/en_US/images/logo@2x.png",
        sponsorLink: "https://franklinsports.com/"
      },
      {
        background: `url(${shutterstock2}) -312px -60.75px / 334.962% 283.758% no-repeat, #572BD6`,
        name: "Callie",
        surname: "Smith",
        country: "USA",
        countryImg: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041",
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Callie-Smith-HS-768x768-1.png",
        ranking: "",
        points: "15,200",
        sponsorLogo: "data:image/png;base64,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",
        sponsorLink: "https://www.onixpickleball.com/"
      }
    ],
    seeAllLink: "https://www.thedinkpickleball.com/"
  }
};

export const Secondary: Story = {
  args: {
    players: [
      {
        background: `url(${shutterstock2}) -312px -60.75px / 334.962% 283.758% no-repeat, #572BD6`,
        name: "Dawson",
        surname: "Callan",
        country: "USA",
        countryImg: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041",
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Chuck-Taylor-HS-768x768-1.png",
        ranking: "12",
        points: "15,200",
        sponsorLogo: "https://franklinsports.com/static/version1689811570/frontend/Franklin/franklin_b2c/en_US/images/logo@2x.png",
        sponsorLink: "https://franklinsports.com/"
      },
      {
        background: 'lightblue',
        name: "Cristiano",
        surname: "Ronaldo",
        country: "POR",
        countryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png",
        img: "https://www.footyrenders.com/render/cristiano-ronaldo-472-332x540.png",
        ranking: "1",
        points: "2,000",
        sponsorLogo: "https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large-1200x473.png",
        sponsorLink: "https://www.nike.com/"
      },
      {
        background: `url(${shutterstock2}) -312px -60.75px / 334.962% 283.758% no-repeat, #572BD6`,
        name: "Dawson",
        surname: "Callan",
        country: "USA",
        countryImg: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041",
        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Chuck-Taylor-HS-768x768-1.png",
        ranking: "12",
        points: "15,200",
        sponsorLogo: "https://franklinsports.com/static/version1689811570/frontend/Franklin/franklin_b2c/en_US/images/logo@2x.png",
        sponsorLink: "https://franklinsports.com/"
      }
    ]
  }
};
