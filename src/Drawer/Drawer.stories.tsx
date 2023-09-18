import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Drawer from './Drawer';

import Button from '../Button';

const meta = {
  title: 'Design System/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

export const DrawerRight: Story = {
  render: () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <div className='flex flex-col gap-4 w-full h-80 justify-center items-center bg-gray-200'>
        <Button onClick={() => setOpen(true)}>Open the drawer</Button>
        {open ? 'Drawer is opened' : 'Drawer is closed'}
        <Drawer title="Drawer title" open={open} onBackdropClick={() => setOpen(false)} onClose={() => setOpen(false)} />
      </div>
    );
  }
};

export const DrawerRightNoBackdropClose: Story = {
  render: () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <div className='flex flex-col gap-4 w-full h-80 justify-center items-center bg-gray-200'>
        <Button onClick={() => setOpen(true)}>Open the drawer</Button>
        {open ? 'Drawer is opened' : 'Drawer is closed'}
        <Drawer title="Drawer title" open={open} onClose={() => setOpen(false)} />
      </div>
    );
  }
};

export const DrawerLeft: Story = {
  render: () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <div className='flex flex-col gap-4 w-full h-80 justify-center items-center bg-gray-200'>
        <Button onClick={() => setOpen(true)}>Open the drawer</Button>
        {open ? 'Drawer is opened' : 'Drawer is closed'}
        <Drawer position='left' title="Drawer title" open={open} onBackdropClick={() => setOpen(false)} onClose={() => setOpen(false)} />
      </div>
    );
  }
};

export const DrawerLeftNoBackdropClose: Story = {
  render: () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <div className='flex flex-col gap-4 w-full h-80 justify-center items-center bg-gray-200'>
        <Button onClick={() => setOpen(true)}>Open the drawer</Button>
        {open ? 'Drawer is opened' : 'Drawer is closed'}
        <Drawer position='left' title="Drawer title" open={open} onClose={() => setOpen(false)} />
      </div>
    );
  }
};

/* Custom close button in children prop */
export const DrawerRightWithChildren: Story = {
  render: () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <div className='flex flex-col gap-4 w-full h-80 justify-center items-center bg-gray-200'>
        <Button onClick={() => setOpen(true)}>Open the drawer</Button>
        {open ? 'Drawer is opened' : 'Drawer is closed'}
        <Drawer open={open} onBackdropClick={() => setOpen(false)}>
          <div className='w-full h-full flex flex-col gap-4 p-4'>
            <h1><b>Title</b></h1>
            <p>Description...</p>
            <Button className='w-40' onClick={() => setOpen(false)}>Close Drawer Button</Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

/* Custom close button in children prop */
export const DrawerLeftWithChildren: Story = {
  render: () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <div className='flex flex-col gap-4 w-full h-80 justify-center items-center bg-gray-200'>
        <Button onClick={() => setOpen(true)}>Open the drawer</Button>
        {open ? 'Drawer is opened' : 'Drawer is closed'}
        <Drawer position='left' open={open} onBackdropClick={() => setOpen(false)}>
          <div className='w-full h-full flex flex-col gap-4 p-4'>
            <h1>Title</h1>
            <p>Description...</p>
            <Button className='w-40' onClick={() => setOpen(false)}>Close Drawer Button</Button>
          </div>
        </Drawer>
      </div>
    );
  }
};
