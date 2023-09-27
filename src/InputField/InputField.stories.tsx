import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import InputField from './InputField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faInfoCircle } from '@fortawesome/pro-light-svg-icons';

const meta = {
  title: 'Design System/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof InputField>;

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
      <InputField />
    </div>
  )
};

export const WithPrefixIcon: Story = {
  args: {
    PrefixIcon: () => <FontAwesomeIcon icon={faEnvelope} />
  }
};

export const WithPrefixIconAndPlaceholder: Story = {
  args: {
    PrefixIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
    placeholder: 'Email'
  }
};

export const WithSuffixIcon: Story = {
  args: {
    SuffixIcon: () => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />
  }
};

export const WithSuffixIconAndPlaceholder: Story = {
  args: {
    SuffixIcon: () => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />,
    placeholder: 'Email'
  }
};

export const WithPrefixIconAndSuffixIconAndPlaceholder: Story = {
  args: {
    PrefixIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
    SuffixIcon: () => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />,
    placeholder: 'Email'
  }
};

export const WithPrefixIconAndSuffixIconAndLabel: Story = {
  args: {
    PrefixIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
    SuffixIcon: () => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />,
    Label: 'Email'
  }
};

export const WithPrefixIconAndSuffixIconAndLabelAndHintMessage: Story = {
  args: {
    PrefixIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
    SuffixIcon: () => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />,
    Label: 'Email',
    HintMessage: 'Type in your email above.'
  }
};

export const WithPrefixIconAndSuffixIconAndLabelAndHintMessageDisabled: Story = {
  args: {
    PrefixIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
    SuffixIcon: () => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />,
    Label: 'Email',
    HintMessage: 'Type in your email above.',
    disabled: true
  }
};

export const WithPrefixIconAndSuffixIconAndLabelAndPlaceholderAndErrorMessage: Story = {
  args: {
    PrefixIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
    SuffixIcon: () => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />,
    Label: 'Email',
    placeholder: 'Type in your email here',
    ErrorMessage: 'This is an error message.',
    destructive: true
  }
};

export const InputFieldFullExampleWithState: Story = {
  render: () => {
    const [text, setText] = React.useState<string | undefined>();
    return (
      <div className='w-full flex flex-col gap-2'>
        Text: {text}
        <div className='w-1/2'>
          <InputField
            PrefixIcon={() => <FontAwesomeIcon icon={faEnvelope} />}
            SuffixIcon={() => <FontAwesomeIcon icon={faInfoCircle} onClick={() => console.log('Do something...')} />}
            Label='Email'
            placeholder='Type in your email here'
            ErrorMessage='Email input field is empty.'
            destructive={text ? text.length === 0 : true}
          />
        </div>
      </div>
    );
  }
};
