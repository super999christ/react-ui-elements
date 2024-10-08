// Button.stories.ts|tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Navbar>
      <Navbar.Brand>PB</Navbar.Brand>
    </Navbar>
  ),
};
