import type { Meta, StoryObj } from '@storybook/react';

import ResultCard from './ResultCard';

const meta = {
  title: 'Pickleball/ResultCard',
  component: ResultCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ResultCard>;

export default meta;
type Story = StoryObj<typeof ResultCard>;

export const SoloLeftWinner: Story = {
  args:  {
    match: {
      id: '386e642f-ebbe-48c2-bbd0-097b52bca520',
      matchStatus: 4,
      team1: {
        players: [{
          playerId: '909FE413-39D0-4838-8F1A-C24F6871EBEB',
          firstName: 'Ben',
          lastName: 'Johns',
          suffixName: '',
          image: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png'
        }],
        isWinner: true,
        scores: [2, 11, 11]
      },
      team2: {
        players: [ {
          playerId: '909FE413-39D0-4838-8F1A-C24F6871EBEB',
          firstName: 'Ethan',
          lastName: 'Rappaport',
          suffixName: '',
          image: ''
        }],
        isWinner: false,
        scores: [11, 6, 7]
      }
    }
  }
};

export const SoloRightWinner: Story = {
  args:  {
    match: {
      id: '386e642f-ebbe-48c2-bbd0-097b52bca520',
      matchStatus: 4,
      team1: {
        players: [{
          playerId: '909FE413-39D0-4838-8F1A-C24F6871EBEB',
          firstName: 'Ethan',
          lastName: 'Rappaport',
          suffixName: '',
          image: ''
        }],
        isWinner: false,
        scores: [11, 6, 7]
      },
      team2: {
        players: [ {
          playerId: '909FE413-39D0-4838-8F1A-C24F6871EBEB',
          firstName: 'Ben',
          lastName: 'Johns',
          suffixName: '',
          image: 'https://www.ppatour.com/wp-content/uploads/2023/06/Ben-Johns-HS.png'
        }],
        isWinner: true,
        scores: [2, 11, 11]
      }
    }
  }
};

export const DuoLeftWinner: Story = {
  args: {
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      matchStatus: 4,
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: '',
          image: ''
        }],
        isWinner: true,
        scores: [11, 11, 7, 9, 11]
      },
      team2: {
        players: [{
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerancejsjsjsjsdsasdsa',
          suffixName: '',
          image: ''
        },
        {
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        }],
        isWinner: false,
        scores: [7, 0, 11, 11, 2]
      }
    }
  }
};

export const DuoRightWinner: Story = {
  args: {
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      matchStatus: 4,
      team1: {
        players: [{
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerancejsjsjsjsdsasdsa',
          suffixName: '',
          image: ''
        },
        {
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        }],
        isWinner: false,
        scores: [7, 0, 11, 11, 2]
      },
      team2: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: '',
          image: ''
        }],
        isWinner: true,
        scores: [11, 11, 7, 9, 11]
      }
    }
  }
};

export const DuoScheduled: Story = {
  args: {
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      matchStatus: 1,
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: '',
          image: ''
        }],
        isWinner: undefined,
        scores: [0, 0, 0]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerancejsjsjsjsdsasdsa',
          suffixName: '',
          image: ''
        }],
        isWinner: undefined,
        scores: [0, 0, 0,]
      }
    }
  }
};

export const DuoLive: Story = {
  args: {
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      matchStatus: 2,
      team1: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerancejsjsjsjsdsasdsa',
          suffixName: '',
          image: ''
        }],
        isWinner: undefined,
        scores: [11, 5, 0,]
      },
      team2: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: '',
          image: ''
        }],
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoDelayed: Story = {
  args: {
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      matchStatus: 3,
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: '',
          image: ''
        }],
        isWinner: undefined,
        scores: [0, 0, 0]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerancejsjsjsjsdsasdsa',
          suffixName: '',
          image: ''
        }],
        isWinner: undefined,
        scores: [0, 0, 0,]
      }
    }
  }
};
