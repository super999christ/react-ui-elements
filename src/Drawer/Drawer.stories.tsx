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

export const DrawerTopWithChildren: Story = {
  render: () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <div className='flex flex-col gap-4 w-full h-80 justify-center items-center bg-gray-200'>
        <Button onClick={() => setOpen(true)}>Open the drawer</Button>
        {open ? 'Drawer is opened' : 'Drawer is closed'}
        <Drawer position='top' open={open} onBackdropClick={() => setOpen(false)}>
          <div className='sm:w-[640px] flex flex-col gap-4 rounded-md bg-gray-200 h-80 p-4 overflow-auto'>
            <h1>Title</h1>
            <p>Description...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Lacus sed viverra tellus in hac habitasse platea dictumst. Tellus elementum sagittis vitae et leo duis ut diam quam. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ultricies integer quis auctor elit sed vulputate mi sit. Quisque egestas diam in arcu cursus euismod. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Neque gravida in fermentum et sollicitudin ac orci. Semper eget duis at tellus at urna condimentum mattis pellentesque. Et malesuada fames ac turpis. Mauris cursus mattis molestie a iaculis at erat. Sit amet purus gravida quis. Netus et malesuada fames ac. Scelerisque in dictum non consectetur a erat nam. Ut sem nulla pharetra diam sit amet nisl suscipit. In metus vulputate eu scelerisque. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Vitae ultricies leo integer malesuada nunc vel risus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mi sit amet mauris commodo quis. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Arcu non sodales neque sodales ut. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Sociis natoque penatibus et magnis dis parturient montes nascetur.</p>
            <Button className='w-40' onClick={() => setOpen(false)}>Close Drawer Button</Button>
          </div>
        </Drawer>
      </div>
    );
  }
};
