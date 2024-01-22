import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlueberries, faChocolateBar, faStrawberry } from "@fortawesome/pro-light-svg-icons";

const meta = {
  title: "Design System/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];

    return (
      <Select
        id="example_1"
        options={options}
        menuPortalTarget={document.body}
      />
    );
  },
};

export const FullExampleWithState: Story = {
  render: () => {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];

    const [selectedOption, setSelectedOption] = React.useState<string>();

    return (
      <>
        <span>Selected option: {selectedOption}</span>
        <Select
          id="example_2"
          options={options}
          onChange={(e: any) => setSelectedOption(e ? e.value : undefined)}
          menuPortalTarget={document.body}
        />
      </>
    );
  },
};

export const FullExampleWithStateAndDefaultValue: Story = {
  render: () => {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];

    const [selectedOption, setSelectedOption] = React.useState<string>('chocolate');

    return (
      <>
        <span>Selected option: {selectedOption}</span>
        <Select
          id="example_2b"
          options={options}
          onChange={(e: any) => setSelectedOption(e ? e.value : undefined)}
          menuPortalTarget={document.body}
          value={options.filter(
            (option) => option.value === selectedOption,
          )}
        />
      </>
    );
  },
};

export const FullExampleWithStateAndDefaultValue2: Story = {
  render: () => {
    const options = [
      { value: "chocolate", label: <div className="inline-flex justify-center items-center gap-1"><FontAwesomeIcon size="xs" icon={faChocolateBar}/> Chocolate</div> },
      { value: "strawberry", label: <div className="inline-flex justify-center items-center gap-1"><FontAwesomeIcon size="xs" icon={faStrawberry}/> Strawberry</div> },
      { value: "blueberries", label: <div className="inline-flex justify-center items-center gap-1"><FontAwesomeIcon size="xs" icon={faBlueberries}/> Blueberries</div> },
    ];

    const [selectedOption, setSelectedOption] = React.useState<string>('blueberries');

    return (
      <>
        <span>Selected option: {selectedOption}</span>
        <Select
          id="example_2c"
          options={options}
          onChange={(e: any) => setSelectedOption(e ? e.value : undefined)}
          menuPortalTarget={document.body}
          value={options.filter(
            (option) => option.value === selectedOption,
          )}
        />
      </>
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];

    return <Select id="example_3" options={options} isMulti menuPortalTarget={document.body} />;
  },
};

type ValueType = "chocolate" | "strawberry" | "vanilla";

interface OptionsInterface {
  value: ValueType;
  label: string;
}

export const MultiSelectFullExampleWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    const [selectedOptions, setSelectedOptions] = React.useState<ValueType[]>([]);

    return (
      <>
        <span>Selected options: {selectedOptions.toString()}</span>
        <Select
          id="example_4"
          options={options}
          onChange={(items: any) =>
            setSelectedOptions([...items.map((item) => item.value)])
          }
          isMulti
          menuPortalTarget={document.body}
        />
      </>
    );
  },
};

type ValueType2 = "chocolate" | "strawberry" | "blueberries";

interface OptionsInterface2 {
  value: ValueType2;
  label: React.ReactNode;
}

export const MultiSelectFullExampleWithState2: Story = {
  render: () => {
    const options: OptionsInterface2[] = [
      { value: "chocolate", label: <div className="inline-flex justify-center items-center gap-1"><FontAwesomeIcon size="xs" icon={faChocolateBar}/> Chocolate</div> },
      { value: "strawberry", label: <div className="inline-flex justify-center items-center gap-1"><FontAwesomeIcon size="xs" icon={faStrawberry}/> Strawberry</div> },
      { value: "blueberries", label: <div className="inline-flex justify-center items-center gap-1"><FontAwesomeIcon size="xs" icon={faBlueberries}/> Blueberries</div> },
    ];
    const [selectedOptions, setSelectedOptions] = React.useState<ValueType2[]>([]);

    return (
      <>
        <span>Selected options: {selectedOptions.toString()}</span>
        <Select
          id="example_4b"
          options={options}
          onChange={(items: any) =>
            setSelectedOptions([...items.map((item) => item.value)])
          }
          isMulti
          menuPortalTarget={document.body}
        />
      </>
    );
  },
};
