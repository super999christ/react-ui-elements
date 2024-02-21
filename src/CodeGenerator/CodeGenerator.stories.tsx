import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CodeGenerator from './CodeGenerator';

const meta = {
  title: 'Design System/CodeGenerator',
  component: CodeGenerator,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof CodeGenerator>;

export default meta;
type Story = StoryObj<typeof CodeGenerator>;

export const CodeGeneratorFullExampleWithState: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>();
    
    return (
      <div className='w-full sm:w-1/2 flex flex-col gap-2'>
        <CodeGenerator
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id='value_1'
          name="Value"
          label='Value'
          placeholder='Enter value'
          numberOfCharactersToGenerateOnButtonClick={20}
          maxLength={20}
        />
      </div>
    );
  }
};

export const CodeGeneratorFullExampleWithState2: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>();
    
    return (
      <div className='w-full flex flex-col gap-2'>
        <CodeGenerator
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id='value_2'
          name="Value"
          label='Value'
          placeholder='Enter value'
          hasError={!value}
          hint={!value ? "No value entered" : ""}
        />
        Entered value: {value}
      </div>
    );
  }
};
