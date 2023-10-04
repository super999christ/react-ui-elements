import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta = {
  title: 'Design System/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {}
};

export const DefaultDisabled: Story = {
  args: {
    disabled: true,
  }
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Email'
  }
};

export const CustomWidth: Story = {
  render: () => (
    <div className='w-80'>
      <Textarea />
    </div>
  )
};

export const withLabel: Story = {
  args: {
    label: 'Email'
  }
};

export const withLabelAndHintMessage: Story = {
  args: {
    label: 'Email',
    hint: 'Type in your email above.'
  }
};

export const withLabelAndHintMessageDisabled: Story = {
  args: {
    label: 'Email',
    hint: 'Type in your email above.',
    disabled: true
  }
};

export const withLabelAndPlaceholderAndErrorMessage: Story = {
  args: {
    label: 'Email',
    placeholder: 'Type in your email here',
    hint: 'This is an error message.',
    hasError: true,
  }
};

export const withLabelAndPlaceholderAndErrorMessageCustomRows: Story = {
  args: {
    label: 'Email',
    placeholder: 'Type in your email here',
    hint: 'This is an error message.',
    hasError: true,
    rows: 5
  }
};

export const TextareaFullExampleWithState: Story = {
  render: () => {
    const [text, setText] = React.useState<string | undefined>();
    return (
      <div className='w-full flex flex-col gap-2'>
        Text: {text}
        <div className='w-1/2'>
          <Textarea
            onChange={(e) => setText(e.target.value)}
            label='Email'
            placeholder='Type in your email here'
            hint={(text && text.length === 0) || !text ? 'Email textarea field is empty.' : undefined}
            hasError={(text && text.length === 0) || !text ? true : false}
          />
        </div>
      </div>
    );
  }
};
