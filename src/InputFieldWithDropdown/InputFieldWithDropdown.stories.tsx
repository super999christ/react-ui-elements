import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import InputFieldWithDropdown, { LabelInterface } from './InputFieldWithDropdown';

const meta = {
  title: 'Design System/InputFieldWithDropdown',
  component: InputFieldWithDropdown,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof InputFieldWithDropdown>;

export default meta;
type Story = StoryObj<typeof InputFieldWithDropdown>;

export const InputFieldWithDropdownFullExampleWithState: Story = {
  render: () => {
    const signs: LabelInterface[] = [
      { value: '1', label: '$' },
      { value: '2', label: '%' },
    ];
    const [sign, setSign] = React.useState<LabelInterface>();
    const [value, setValue] = React.useState<string>();
    
    return (
      <div className='w-full sm:w-1/2 flex flex-col gap-2'>
        <InputFieldWithDropdown
          autoComplete="off"
          dropdownValue={sign}
          dropdownList={signs}
          defaultDropdownValue={signs[0]}
          dropdownOnChange={(e) => setSign(e)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id='value_1'
          name="Value"
          label='Value'
          placeholder='Enter value'
          menuPortalTarget={document.body}
        />
      </div>
    );
  }
};

export const InputFieldWithDropdownFullExampleWithState2: Story = {
  render: () => {
    const signs: LabelInterface[] = [
      { value: '1', label: '$' },
      { value: '2', label: '%' },
    ];
    const [sign, setSign] = React.useState<LabelInterface>();
    const [value, setValue] = React.useState<string>();
    const validatePercentage = true;
    
    return (
      <div className='w-full flex flex-col gap-2'>
        <p>When % is selected the value needs to be in the range [0, 100]</p>
        Selected sign: {sign && JSON.stringify(sign)}
        <InputFieldWithDropdown
          autoComplete="off"
          dropdownValue={sign}
          dropdownList={signs}
          defaultDropdownValue={signs[1]}
          dropdownOnChange={(e) => {
            if (validatePercentage && e.label === '%') { // Changing from other dropdown options to '%' option needs to reset the value, since % needs to be valid (between 0 and 100)
              setValue('');
            }
            setSign(e);
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id='value_2'
          name="Value"
          label='Value'
          placeholder='Enter value'
          menuPortalTarget={document.body}
          hasError={!value}
          hint={!value ? "No value entered" : ""}
          validatePercentage
        />
        Entered value: {value}
      </div>
    );
  }
};
