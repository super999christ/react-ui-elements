import type { Meta, StoryObj } from "@storybook/react";

import MatchCardV2 from "./MatchCardV2";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";

const meta = {
  title: "Pickleball/MatchCardV2",
  component: MatchCardV2,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof MatchCardV2>;

export default meta;
type Story = StoryObj<typeof MatchCardV2>;

export const SoloLeftWinner: Story = {
  args:  {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      archivedURL: 'https://youtube.com',
    },
    match: {
      id: '386e642f-ebbe-48c2-bbd0-097b52bca520',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
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
        percentage: 69.3,
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
        percentage: 30.7,
        scores: [11, 6, 7]
      }
    }
  }
};

export const SoloRightWinner: Story = {
  args:  {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      archivedURL: 'https://youtube.com',
    },
    match: {
      id: '386e642f-ebbe-48c2-bbd0-097b52bca520',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      team1: {
        players: [{
          playerId: '909FE413-39D0-4838-8F1A-C24F6871EBEB',
          firstName: 'Ethan',
          lastName: 'Rappaport',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
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
        percentage: 30,
        isWinner: true,
        scores: [2, 11, 11]
      }
    }
  }
};

export const DuoLeftWinner: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      archivedURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'M',
          lastName: 'Emmrich',
          suffixName: '',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'D',
          lastName: 'De La Rosa Extended',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: true,
        scores: [11, 11, 7, 9, 11]
      },
      team2: {
        players: [{
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
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
        percentage: 30,
        isWinner: false,
        scores: [7, 0, 11, 11, 2]
      }
    }
  }
};

export const DuoRightWinner: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      archivedURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      team1: {
        players: [{
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
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
        percentage: 30,
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
        percentage: 70,
        isWinner: true,
        scores: [11, 11, 7, 9, 11]
      }
    }
  }
};

export const DuoScheduled: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      tournamentTitle: 'PPA Tour: Las Vegas Nevada USA Extra Extra Text',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age) Extra Text Test',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
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
        percentage: 70,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: undefined,
        scores: [0, 0, 0]
      }
    }
  }
};

export const DuoLive: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    showCourtNameInTourTitleRow: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'CC',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const SingleLiveWithDotsTeamOnePlayerOneFirstServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    showCourtNameInTourTitleRow: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'GS',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 1,
      currentServingNumber: 1,
      team1: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
      },
      team2: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const SingleLiveWithDotsTeamOnePlayerOneSecondServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    showCourtNameInTourTitleRow: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'GS2',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 1,
      currentServingNumber: 2,
      team1: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
      },
      team2: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const SingleLiveWithDotsTeamTwoPlayerOneFirstServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 2,
      currentServingNumber: 1,
      team1: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
      },
      team2: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const SingleLiveWithDotsTeamTwoPlayerOneSecondServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 2,
      currentServingNumber: 2,
      team1: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
      },
      team2: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamOnePlayerOneFirstServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 1,
      currentServingNumber: 1,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamOnePlayerOneSecondServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 1,
      currentServingNumber: 2,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamOnePlayerTwoFirstServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 2,
      server: 1,
      currentServingNumber: 1,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamOnePlayerTwoSecondServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 2,
      server: 1,
      currentServingNumber: 2,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamTwoPlayerOneFirstServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 2,
      currentServingNumber: 1,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamTwoPlayerOneSecondServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 1,
      server: 2,
      currentServingNumber: 2,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamTwoPlayerTwoFirstServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 2,
      server: 2,
      currentServingNumber: 1,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoLiveWithDotsTeamTwoPlayerTwoSecondServe: Story = {
  args: {
    shortenName: true,
    compact: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '',
      gameThreeEndDate: '',
      serverFromTeam: 2,
      server: 2,
      currentServingNumber: 2,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 70,
        isWinner: undefined,
        scores: [11, 8, 0]
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
        percentage: 30,
        isWinner: undefined,
        scores: [7, 5, 0]
      }
    }
  }
};

export const DuoDelayed: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
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
        percentage: 70,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: undefined,
        scores: [0, 0, 0]
      }
    }
  }
};

export const DuoCanceled: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 6,
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
        percentage: 70,
        isWinner: false,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [0, 0, 0]
      }
    }
  }
};

export const DuoTeamOneFFGameOne: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 2,
      gamesStatus: [2, 0, 0],
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
        percentage: 70,
        isWinner: false,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [0, 0, 0]
      }
    }
  }
};

export const DuoTeamOneFFGameTwo: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 2,
      gamesStatus: [5, 2, 0],
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
        percentage: 70,
        isWinner: false,
        scores: [11, 0, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [7, 0, 0]
      }
    }
  }
};

export const DuoTeamOneFFGameThree: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 2,
      gamesStatus: [5, 5, 2],
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
        percentage: 70,
        isWinner: false,
        scores: [11, 10, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [7, 12, 0]
      }
    }
  }
};

export const DuoTeamTwoFFDuringGameOne: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 2,
      gamesStatus: [7, 0, 0],
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
        percentage: 70,
        isWinner: true,
        scores: [7, 0, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [6, 0, 0]
      }
    }
  }
};

export const DuoTeamTwoFFDuringGameTwo: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 2,
      gamesStatus: [5, 7, 0],
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
        percentage: 70,
        isWinner: true,
        scores: [7, 9, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [11, 8, 0]
      }
    }
  }
};

export const DuoTeamTwoFFDuringGameThree: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 2,
      gamesStatus: [5, 5, 7],
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
        percentage: 70,
        isWinner: true,
        scores: [7, 12, 10]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [11, 10, 10]
      }
    }
  }
};

export const DuoTeamOneWDGameOne: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 4,
      gamesStatus: [4, 0, 0],
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
        percentage: 70,
        isWinner: false,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [0, 0, 0]
      }
    }
  }
};

export const DuoTeamOneWDGameTwo: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 4,
      gamesStatus: [5, 4, 0],
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
        percentage: 70,
        isWinner: false,
        scores: [11, 0, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [7, 0, 0]
      }
    }
  }
};

export const DuoTeamOneWDGameThree: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 4,
      gamesStatus: [5, 5, 4],
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
        percentage: 70,
        isWinner: false,
        scores: [11, 10, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [7, 12, 0]
      }
    }
  }
};

export const DuoTeamTwoWDDuringGameOne: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 4,
      gamesStatus: [9, 0, 0],
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
        percentage: 70,
        isWinner: true,
        scores: [1, 0, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [1, 0, 0]
      }
    }
  }
};

export const DuoTeamTwoWDDuringGameTwo: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 4,
      gamesStatus: [5, 9, 0],
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
        percentage: 70,
        isWinner: true,
        scores: [7, 2, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [11, 0, 0]
      }
    }
  }
};

export const DuoTeamTwoWDDuringGameThree: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 4,
      gamesStatus: [5, 5, 9],
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
        percentage: 70,
        isWinner: true,
        scores: [7, 12, 13]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [11, 10, 14]
      }
    }
  }
};

export const DuoTeamOneRETDuringGameOne: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 3,
      gamesStatus: [3, 0, 0],
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
        percentage: 70,
        isWinner: false,
        scores: [1, 0, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [4, 0, 0]
      }
    }
  }
};

export const DuoTeamOneRETDuringGameTwo: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 3,
      gamesStatus: [5, 3, 0],
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
        percentage: 70,
        isWinner: false,
        scores: [7, 8, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [11, 2, 0]
      }
    }
  }
};

export const DuoTeamOneRETDuringGameThree: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 3,
      gamesStatus: [5, 5, 3],
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
        percentage: 70,
        isWinner: false,
        scores: [7, 12, 1]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: true,
        scores: [11, 10, 1]
      }
    }
  }
};

export const DuoTeamTwoRETGameOne: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 3,
      gamesStatus: [8, 0, 0],
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
        percentage: 70,
        isWinner: true,
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [0, 0, 0]
      }
    }
  }
};

export const DuoTeamTwoRETGameTwo: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 3,
      gamesStatus: [5, 8, 0],
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
        percentage: 70,
        isWinner: true,
        scores: [11, 0, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [7, 0, 0]
      }
    }
  }
};

export const DuoTeamTwoRETGameThree: Story = {
  args: {
    shortenName: true,
    compact: true,
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 4,
      matchCompletedType: 3,
      gamesStatus: [5, 5, 8],
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
        percentage: 70,
        isWinner: true,
        scores: [11, 10, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 30,
        isWinner: false,
        scores: [7, 12, 0]
      }
    }
  }
};

export const DuoHideMatchTimeStartRowOnPhones: Story = {
  args: {
    shortenName: true,
    compact: true,
    hideMatchTimeStartRowOnPhones: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      archivedURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
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
        percentage: 0,
        isWinner: false,
        scores: [9, 10, 0]
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
          lastName: 'Pomerance',
          suffixName: '',
          image: ''
        }],
        percentage: 100,
        isWinner: true,
        scores: [11, 12, 0]
      }
    }
  }
};

export const DuoLiveHideMatchTimeStartRowOnPhonesWithSuffixNames: Story = {
  args: {
    shortenName: true,
    compact: true,
    hideMatchTimeStartRowOnPhones: true,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '2',
      gameThreeEndDate: '',
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: 'Jr.',
          image: '',
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [9, 12, 1]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
          suffixName: 'Sr.',
          image: ''
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [11, 10, 10]
      }
    }
  }
};

export const DuoLiveWithSuffixNamesDetailsURLSponsors: Story = {
  args: {
    shortenName: true,
    compact: true,
    sponsors: <div className="flex gap-1">
      <a><FontAwesomeIcon icon={faYoutube} /></a>
      <a><FontAwesomeIcon icon={faTwitch} /></a>
    </div>,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      detailsURL: 'https://ppatour.com',
      timezoneAbbreviation: 'EST',
      matchTimeStart: 'Jun 26 - 12:50 AM ',
      matchTime: '12:50 AM ',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      courtName: 'Court 5',
      roundNumber: 'Round 4',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '2',
      gameThreeEndDate: '',
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: 'Jr.',
          image: '',
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [9, 12, 10]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
          suffixName: 'Sr.',
          image: ''
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [11, 10, 9]
      }
    }
  }
};

export const DuoLiveWithSuffixNamesDetailsURLSponsors2: Story = {
  args: {
    shortenName: true,
    compact: true,
    sponsors: <div className="flex items-center gap-1">
      <a><FontAwesomeIcon icon={faYoutube} /></a>
      <a><FontAwesomeIcon icon={faTwitch} /></a>
    </div>,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      detailsURL: 'https://ppatour.com',
      timezoneAbbreviation: 'EST',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '2',
      gameThreeEndDate: '',
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: 'Jr.',
          image: '',
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [9, 12, 10]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
          suffixName: 'Sr.',
          image: ''
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [11, 10, 10]
      }
    }
  }
};

export const DuoLiveWithSuffixNamesDetailsURLSponsorsFiveGames: Story = {
  args: {
    shortenName: true,
    compact: true,
    sponsors: <div className="flex items-center gap-1">
      <a><FontAwesomeIcon icon={faYoutube} /></a>
      <a><FontAwesomeIcon icon={faTwitch} /></a>
    </div>,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      detailsURL: 'https://ppatour.com',
      timezoneAbbreviation: 'EST',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '2',
      gameThreeEndDate: '3',
      gameFourEndDate: '4',
      gameFiveEndDate: '',
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: 'Jr.',
          image: '',
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [9, 12, 11, 2, 2]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
          suffixName: 'Sr.',
          image: ''
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [11, 10, 9, 11, 10]
      }
    }
  }
};

export const DuoLiveWithSuffixNamesDetailsURLSponsorsNotCompactMatchNumber: Story = {
  args: {
    shortenName: true,
    sponsors: <div className="flex items-center gap-1">
      <a><FontAwesomeIcon icon={faYoutube} /></a>
      <a><FontAwesomeIcon icon={faTwitch} /></a>
    </div>,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      matchNumber: 7,
      detailsURL: 'https://ppatour.com',
      timezoneAbbreviation: 'EST',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '2',
      gameThreeEndDate: '',
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: 'Jr.',
          image: '',
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [9, 12, 10]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
          suffixName: 'Sr.',
          image: ''
        }],
        percentage: 50,
        isWinner: undefined,
        scores: [11, 10, 10]
      }
    }
  }
};

export const DuoLiveWithSuffixNamesDetailsURLSponsorsNotCompactMatchNumberNoPercentages: Story = {
  args: {
    shortenName: true,
    sponsors: <div className="flex items-center gap-1">
      <a><FontAwesomeIcon icon={faYoutube} /></a>
      <a><FontAwesomeIcon icon={faTwitch} /></a>
    </div>,
    links: {
      matchStatsURL: 'https://pickleball.com',
      liveURL: 'https://youtube.com',
    },
    match: {
      id: '1dbff42d-ca82-4fcc-846a-f710bf70c5fd',
      matchNumber: 7,
      detailsURL: 'https://ppatour.com',
      timezoneAbbreviation: 'EST',
      eventTitle: '3 - Mens Doubles Skill 4.5+ (Any Age)',
      matchStatus: 2,
      gameOneEndDate: '1',
      gameTwoEndDate: '2',
      gameThreeEndDate: '',
      team1: {
        players: [{
          playerId: '613f1725-0569-4a20-a856-93da9daa9478',
          firstName: 'Matt',
          lastName: 'Glatt',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '342B4AC2-997A-4FBE-A097-7E0A93CD758E',
          firstName: 'Spencer',
          lastName: 'Hart',
          suffixName: 'Jr.',
          image: '',
        }],
        isWinner: undefined,
        scores: [9, 12, 10]
      },
      team2: {
        players: [{
          playerId: '77E01EA4-4DB0-4914-BE3D-DD65E5A28C8C',
          firstName: 'Kevin',
          lastName: 'Coutant',
          suffixName: 'Sr.',
          image: ''
        },
        {
          playerId: '4DB144E2-ADBB-4CF7-A576-AE1AE3E87E64',
          firstName: 'Mitch',
          lastName: 'Pomerance',
          suffixName: 'Sr.',
          image: ''
        }],
        isWinner: undefined,
        scores: [11, 10, 10]
      }
    }
  }
};
