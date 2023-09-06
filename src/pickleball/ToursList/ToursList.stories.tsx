import type { Meta, StoryObj } from '@storybook/react';

import ToursList from './ToursList';
import pickleballPlusLogo from '../assets/pickleball-plus-experiment.svg';

const meta = {
  title: 'Pickleball/ToursList',
  component: ToursList,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ToursList>;

export default meta;
type Story = StoryObj<typeof ToursList>;

export const Primary: Story = {
  args: {
    tours: [
      {
        logo: "https://www.ppatour.com/wp-content/uploads/2023/01/Carvana-PPA-Tour-mobile.png",
        name: "PPA Tour",
        link: "https://www.ppatour.com"
      },
      {
        logo: "https://media.zenfs.com/en/news_direct/9a3058e328e57109ec9e9f4f764ab83c",
        name: "APP Tour",
        link: "https://www.theapp.global/2023-players/tour/professional"
      },
      {
        logo: "https://static.tixr.com/static/images/external/img/77456e1e-3eb4-4833-8430-fe835c79803b.png",
        name: "Major League Pickleball",
        link: "https://www.majorleaguepickleball.net/"
      },
      {
        logo: "https://www.superbcrew.com/wp-content/uploads/2023/02/nplpickleball-logo.png",
        name: "National Pickleball League",
        link: "https://usa-npl.com/"
      },
      {
        logo: "https://www.sandiego.org/-/media/images/sdta-site/events/sports/world-pickleball-tour/pickleballtour-226x124-1.jpg?bc=white&h=124",
        name: "World Pickleball Tour",
        link: "https://www.wptevents.com/"
      },
      {
        logo: "https://www.pickleballparrot.com/content/images/2021/10/ppa-texas-open-1280px-1.jpg",
        name: "Texas Open",
        link: "https://www.ppatour.com/tournament/texas-open/"
      },
      {
        logo: "https://gazettenewsthevillages.com/wp-content/uploads/2021/06/listing-4110-usopen_pickleball_logo.png",
        name: "US Open Pickleball",
        link: "https://www.usopenpickleballchampionship.com/"
      }
    ],
    mainLogo: pickleballPlusLogo,
  }
};
