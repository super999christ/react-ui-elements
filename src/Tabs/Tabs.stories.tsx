import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Tabs from "./Tabs";

const meta = {
  title: "Design System/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

interface OptionsInterface {
  value: string;
  label: string;
}

export const Primary: Story = {
  args: {
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const PrimaryMD: Story = {
  args: {
    size: "md",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const PrimaryMDFullWidth: Story = {
  args: {
    fullWidth: true,
    size: "md",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const PrimarySMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const PrimaryMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const Gray: Story = {
  args: {
    variant: "gray",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const GrayMD: Story = {
  args: {
    size: "md",
    variant: "gray",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const GrayMDFullWidth: Story = {
  args: {
    fullWidth: true,
    size: "md",
    variant: "gray",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const GraySMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="gray"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const GrayMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
          variant="gray"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const WhiteBorder: Story = {
  args: {
    variant: "white-border",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const WhiteBorderMD: Story = {
  args: {
    size: "md",
    variant: "white-border",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const WhiteBorderMDFullWidth: Story = {
  args: {
    fullWidth: true,
    size: "md",
    variant: "white-border",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const WhiteBorderSMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="white-border"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const WhiteBorderMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
          variant="white-border"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const UnderlineMD: Story = {
  args: {
    size: "md",
    variant: "underline",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const UnderlineMDFullWidth: Story = {
  args: {
    fullWidth: true,
    size: "md",
    variant: "underline",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const UnderlineSMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="underline"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const UnderlineMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
          variant="underline"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const UnderlineFilled: Story = {
  args: {
    variant: "underline-filled",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const UnderlineFilledMD: Story = {
  args: {
    size: "md",
    variant: "underline-filled",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const UnderlineFilledMDFullWidth: Story = {
  args: {
    fullWidth: true,
    size: "md",
    variant: "underline-filled",
    active: "1",
    options: [
      {
        value: "1",
        label: "Home",
      },
      {
        value: "2",
        label: "Leagues",
      },
      {
        value: "3",
        label: "Players",
      },
      {
        value: "4",
        label: "Results",
      },
      {
        value: "5",
        label: "Tournaments",
      },
    ],
  },
};

export const UnderlineFilledSMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="underline-filled"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const UnderlineFilledLGFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="lg"
          variant="underline-filled"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const UnderlineFilledXLFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="xl"
          variant="underline-filled"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const UnderlineFilled2XLFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="2xl"
          variant="underline-filled"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalSMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col sm:flex-row">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalGraySMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col sm:flex-row">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="gray"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalGrayMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
          variant="gray"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalUnderlineSMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col sm:flex-row">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="underline"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalUnderlineFMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
          variant="underline"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalUnderlineFilledSMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col sm:flex-row">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="underline-filled"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalUnderlineFilledMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
          variant="underline-filled"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalWhiteBorderFilledSMWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col sm:flex-row">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="white-border"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalWhiteBorderFilledMDFullWidthWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          fullWidth={true}
          size="md"
          variant="white-border"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const UnderlineFilledSMWithStateWithCustomWidth: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col">
        <Tabs
          className="!w-80"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="underline-filled"
        />
        <div className="w-full h-20 p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};

export const TypeVerticalWhiteBorderFilledSMWithStateWithCustomHeight: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "leagues",
        label: "Leagues",
      },
      {
        value: "players",
        label: "Players",
      },
      {
        value: "results",
        label: "Results",
      },
      {
        value: "tournaments",
        label: "Tournaments",
      },
      {
        value: "manage",
        label: "Manage",
      },
      {
        value: "sso",
        label: "SSO",
      },
      {
        value: "managev2",
        label: "ManageV2",
      },
    ];
    const [selectedOption, setSelectedOption] = React.useState<string>(options[0].value);

    return (
      <div className="flex flex-col sm:flex-row">
        <Tabs
          className="h-40 w-fit overflow-x-hidden overflow-y-auto"
          type="vertical"
          options={options}
          onChange={(e: any) => setSelectedOption(e.value || e.target.value)}
          active={selectedOption}
          size="sm"
          variant="white-border"
          tabClassname="mr-2"
        />
        <div className="w-full h-full p-4">
          <span>Selected option value: {selectedOption.toString()}</span>
          <h1>Render content depending on the selected option</h1>
        </div>
      </div>
    );
  },
};
