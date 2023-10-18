import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta = {
  title: 'Design System/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
      <Select id="example_1" options={options}/>
    );
  }
};

export const FullExampleWithState: Story = {
  render: () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = React.useState<string>();

    return (
      <>
        <span>Selected option: {selectedOption}</span>
        <Select
          id="example_2"
          options={options}
          onChange={(e: any) => setSelectedOption(e ? e.value : undefined)}
        />
      </>
    )
  }
};

export const MultiSelect: Story = {
  render: () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
      <Select id="example_3" options={options} isMulti />
    );
  }
};

type ValueType = "chocolate" | "strawberry" | "vanilla";

interface OptionsInterface {
  value: ValueType;
  label: string;
}

export const MultiSelectFullExampleWithState: Story = {
  render: () => {
    const options: OptionsInterface[] = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedOptions, setSelectedOptions] = React.useState<ValueType[]>([]);

    return (
      <>
        <span>Selected options: {selectedOptions.toString()}</span>
        <Select
          id="example_4"
          options={options}
          onChange={(items: any) => setSelectedOptions([...items.map((item) => item.value)])}
          isMulti
        />
      </>
    )
  }
};
