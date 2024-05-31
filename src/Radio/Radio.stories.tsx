import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";

const meta = {
  title: "Design System/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioMD: Story = {
  args: {
    size: "md",
  },
};

export const RadioMDWithText: Story = {
  args: {
    size: "md",
    Text: "This is a radio",
  },
};

export const RadioMDWithTextAndSupportingText: Story = {
  args: {
    size: "md",
    Text: "This is a radio",
    SupportingText: "I do not know why is this a radio",
  },
};

export const RadioMDUnchecked: Story = {
  args: {
    size: "md",
    checked: false,
  },
};

export const RadioMDDisabled: Story = {
  args: {
    size: "md",
    disabled: true,
  },
};

export const RadioMDDisabledWithText: Story = {
  args: {
    size: "md",
    disabled: true,
    Text: 'This is a disabled radio',
  },
};

export const RadioMDChecked: Story = {
  args: {
    size: "md",
    checked: true,
  },
};

export const RadioMDCheckedAndDisabled: Story = {
  args: {
    size: "md",
    checked: true,
    disabled: true,
  },
};

export const RadioMDDefaultChecked: Story = {
  args: {
    size: 'md',
    defaultChecked: true,
  },
};

export const RadioSM: Story = {
  args: {
    size: "sm",
  },
};

export const RadioSMWithText: Story = {
  args: {
    size: "sm",
    Text: "This is a radio",
  },
};

export const RadioSMWithTextAndSupportingText: Story = {
  args: {
    size: "sm",
    Text: "This is a radio",
    SupportingText: "I do not know why is this a radio",
  },
};

export const RadioSMUnchecked: Story = {
  args: {
    size: "sm",
    checked: false,
  },
};

export const RadioSMDisabled: Story = {
  args: {
    size: "sm",
    disabled: true,
  },
};

export const RadioSMChecked: Story = {
  args: {
    size: "sm",
  },
};

export const RadioSMCheckedAndDisabled: Story = {
  args: {
    size: "sm",
    checked: true,
    disabled: true,
  },
};

export const RadioSMDefaultChecked: Story = {
  args: {
    size: 'sm',
    defaultChecked: true,
  },
};

export const RadioFullExample: Story = {
  render: () => {
    const socialMedias = [
      { id: "facebook", value: "Facebook" },
      { id: "Instagram", value: "Instagram" },
      { id: "x/twitter", value: "X/Twitter" },
    ];
    return (
      <div className="flex w-full justify-center gap-2">
        {socialMedias.map((socialMedia) => (
          <Radio
            key={socialMedia.id}
            name="Social_media"
            id={socialMedia.id}
            value={socialMedia.value}
            Text={socialMedia.value}
          />
        ))}
      </div>
    );
  },
};

type IdType = "react" | "angular" | "vue";

interface FrameworkInterface {
  id: IdType;
  value: string;
}

export const RadioFullExampleWithState: Story = {
  render: () => {
    const frameworks: FrameworkInterface[] = [
      { id: "react", value: "React" },
      { id: "angular", value: "Angular" },
      { id: "vue", value: "Vue" },
    ];
    const [selected, setSelected] = React.useState<IdType>();

    const handleOptionChange = (event) => {
      setSelected(event.target.value);
    };

    return (
      <div className="flex flex-col w-full justify-center gap-1">
        Selected: {selected && selected.toString()}
        {frameworks.map((framework) => (
          <Radio
            key={framework.id}
            name="Front_end_framework"
            id={framework.id}
            value={framework.value}
            Text={framework.value}
            onChange={handleOptionChange}
            size="sm"
          />
        ))}
      </div>
    );
  },
};

export const RadioFullExampleWithStateCustomWrapperClassname: Story = {
  render: () => {
    const frameworks: FrameworkInterface[] = [
      { id: "react", value: "React" },
      { id: "angular", value: "Angular" },
      { id: "vue", value: "Vue" },
    ];
    const [selected, setSelected] = React.useState<IdType>();

    const handleOptionChange = (event) => {
      setSelected(event.target.value);
    };

    return (
      <div className="flex flex-col w-full justify-center gap-1">
        Selected: {selected && selected.toString()}
        {frameworks.map((framework) => (
          <Radio
            key={framework.id}
            name="Front_end_framework2"
            id={framework.id}
            value={framework.value}
            Text={framework.value}
            onChange={handleOptionChange}
            wrapperClassname="!gap-1"
          />
        ))}
      </div>
    );
  },
};
