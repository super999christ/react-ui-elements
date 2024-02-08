import type { Meta, StoryObj } from '@storybook/react';

import ColorPicker from './ColorPicker';
import React from 'react';

const meta = {
  title: 'Design System/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    readOnly: true,
  }
};

export const FullExampleWithState: Story = {
  render: () => {
    const [color, setColor] = React.useState<string>('');

    return (
      <div className='w-60'>
        <ColorPicker
          onChange={(e) => setColor(`#${e.target.value}`)}
       />
      </div>
    );
  }
}
