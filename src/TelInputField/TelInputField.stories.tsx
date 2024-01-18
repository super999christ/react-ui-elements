import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TelInputField, { CountryInterface } from './TelInputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/pro-light-svg-icons';

const meta = {
  title: 'Design System/TelInputField',
  component: TelInputField,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof TelInputField>;

export default meta;
type Story = StoryObj<typeof TelInputField>;

export const PhoneInputFieldFullExampleWithState: Story = {
  render: () => {
    const countries: CountryInterface[] = [
      { value: '1', label: 'USA (+1)' },
      { value: '2', label: 'CAN (+1)' },
      { value: '3', label: 'BIH (+387)' },
      { value: '4', label: 'WSM (+685)' },
      { value: '5', label: 'OMN (+968)' },
    ];
    const [country, setCountry] = React.useState<CountryInterface>();
    const [phoneNumber, setPhoneNumber] = React.useState<string>();
    
    return (
      <div className='w-full sm:w-1/2 flex flex-col gap-2'>
        <TelInputField
          countryValue={country}
          countryList={countries}
          defaultCountry={countries[0]}
          countryOnChange={(e) => setCountry(e)}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id='Phone number'
          name="Phone number"
          label='Phone number'
          placeholder='Enter your phone number'
          SuffixIcon={() => <FontAwesomeIcon icon={faPhone} />}
          menuPortalTarget={document.body}
        />
      </div>
    );
  }
};

export const PhoneInputFieldFullExampleWithState2: Story = {
  render: () => {
    const countries: CountryInterface[] = [
      { value: '1', label: 'USA (+1)' },
      { value: '2', label: 'CAN (+1)' },
      { value: '3', label: 'BIH (+387)' },
      { value: '4', label: 'WSM (+685)' },
      { value: '5', label: 'OMN (+968)' },
    ];
    const [country, setCountry] = React.useState<CountryInterface>();
    const [phoneNumber, setPhoneNumber] = React.useState<string>();
    
    return (
      <div className='w-full flex flex-col gap-2'>
        Selected country: {country && JSON.stringify(country)}
        <TelInputField
          countryValue={country}
          countryList={countries}
          defaultCountry={countries[2]}
          countryOnChange={(e) => setCountry(e)}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id='Phone numbe 2'
          name="Phone number"
          label='Phone number'
          placeholder='Enter your phone number'
          SuffixIcon={() => <FontAwesomeIcon icon={faPhone} />}
          menuPortalTarget={document.body}
          hasError={!phoneNumber}
          hint={!phoneNumber ? "No number entered" : ""}
        />
        Entered phone number: {phoneNumber}
      </div>
    );
  }
};
