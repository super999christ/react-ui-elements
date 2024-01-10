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

export const SwitchMDWithLabel: Story = {
  args: {
    size: "md",
    label: "This is a switch",
    id: 'switch_with_label'
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
  
    return (
      <Switch 
        size='sm' 
        id="switch_0"
        checked={checked} 
        onChange={(checked) => setChecked(checked)} 
      />
    );
  }
}

export const SwitchLabelRightFullStateExample: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean>(false);
  
    return (
      <Switch 
        size='sm' 
        id="switch_1" 
        checked={checked} 
        onChange={(checked) => setChecked(checked)}
        label="This is a switch"
      />
    );
  }
}

export const SwitchLabelLeftFullStateExample: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean>(false);
  
    return (
      <Switch 
        size='sm'
        id="switch_2"
        checked={checked} 
        onChange={(checked) => setChecked(checked)}
        label="This is a switch"
        labelPosition="left"
      />
    );
  }
}

export const SwitchCustomLabelFullStateExample: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean>(false);
  
    return (
      <Switch 
        size='sm' 
        id="switch_3" 
        checked={checked} 
        onChange={(checked) => setChecked(checked)}
        label={<p className="text-md font-bold text-primary-700">This is a custom label</p>}
        labelPosition="right"
        name="switch_3"
      />
    );
  }
}
