import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";

const meta = {
  title: "Design System/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchXS: Story = {
  args: {
    size: "xs",
  },
};

export const SwitchSM: Story = {
  args: {
    size: "sm",
  },
};

export const SwitchMD: Story = {
  args: {
    size: "md",
  },
};

export const SwitchMDDisabled: Story = {
  args: {
    size: "md",
    disabled: true,
  },
};

export const SwitchFullStateExample: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean>(false);
  
    return <Switch size='sm' id="switch" checked={checked} onChange={(checked) => setChecked(checked)} />;
  }
}
