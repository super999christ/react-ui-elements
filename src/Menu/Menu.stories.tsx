import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Menu';
import { Button, Menu } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-light-svg-icons';

const meta = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  render: () => (
    <Menu width={240} offset={5}>
      <Menu.Trigger asChild>
        <Button
          variant="secondary"
          size="sm"
          suffixIcon={
            <FontAwesomeIcon icon={faAngleDown} height={10} width={10} />
          }
        >
          Account
        </Button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item value={1}>View profile</Menu.Item>
        <Menu.Item value={2}>Settings</Menu.Item>
        <Menu.Item value={3}>Keyboard shortcuts</Menu.Item>
      </Menu.List>
    </Menu>
  ),
};
