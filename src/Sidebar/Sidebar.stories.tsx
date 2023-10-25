import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';
import React from 'react';
import clsx from 'clsx';

const meta = {
  title: 'Design System/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarUncontrolled: Story = {
  args: {
    className: 'min-h-screen max-h-screen bg-brand-400',
    children: <div className='w-full flex flex-col p-4'>
    <div className='w-full'>1. First item</div>
    <div className='w-full'>2. Second item</div>
    <div className='w-full'>3. Third item</div>
    <div className='w-full'>4. Fourth item</div>
    <div className='w-full'>5. Fifth item</div>
  </div>,
  }
}

export const SidebarUncontrolledCollapsible: Story = {
  args: {
    className: 'min-h-screen max-h-screen bg-brand-400',
    isCollapsible: true
  }
}

export const SidebarControlledCollapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(true);

    return (
      <Sidebar collapsingIconClasses='!text-white' className='min-h-screen max-h-screen bg-brand-400' isCollapsible collapsed={collapsed} onOpenChange={() => setCollapsed(!collapsed)}>
        <div className='w-full flex flex-col p-4'>
          <div className='w-full'>1. First item</div>
          <div className='w-full'>2. Second item</div>
          <div className='w-full'>3. Third item</div>
          <div className='w-full'>4. Fourth item</div>
          <div className='w-full'>5. Fifth item</div>
        </div>
      </Sidebar>
    );
  }
};

export const SidebarControlledCollapsibleCustomWidths: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(true);

    return (
      <Sidebar collapsedWidth={64} uncollapsedWidth={400} collapsingIconClasses='!text-white' className='min-h-screen max-h-screen bg-brand-400' isCollapsible collapsed={collapsed} onOpenChange={() => setCollapsed(!collapsed)}>
        <div className='w-full flex flex-col p-4'>
          <div className='w-full'>1. First item</div>
          <div className='w-full'>2. Second item</div>
          <div className='w-full'>3. Third item</div>
          <div className='w-full'>4. Fourth item</div>
          <div className='w-full'>5. Fifth item</div>
        </div>
      </Sidebar>
    );
  }
};

export const SidebarWithNavbar: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(true);

    const wrapperClasses = clsx('grid grid-cols-[255px_auto] grid-rows-[56px_auto] h-screen', {
      'grid-cols-[40px_auto]': collapsed,
    });

    return (
      <div 
        className={wrapperClasses}
        style={{gridTemplateAreas: `"p-top_nav p-top_nav" "p-workspace__sidebar p-workspace__primary_view"`}}
      >
        <div style={{gridArea: 'p-top_nav'}}>
          Navigation
        </div>
        <Sidebar className='bg-brand-400' style={{gridArea: 'p-workspace__sidebar'}} isCollapsible collapsed={collapsed} onOpenChange={() => setCollapsed(!collapsed)}>
          <div className='w-full flex flex-col p-4'>
            <div className='w-full'>1. First item</div>
            <div className='w-full'>2. Second item</div>
            <div className='w-full'>3. Third item</div>
            <div className='w-full'>4. Fourth item</div>
            <div className='w-full'>5. Fifth item</div>
          </div>
        </Sidebar>
        <div className='overflow-y-auto p-4' style={{gridArea: 'p-workspace__primary_view'}}>
          Content goes here...
        </div>
      </div>
    );
  }
};

export const SidebarWithNavbarWithSidebarInside: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(true);

    const wrapperClasses = clsx('grid grid-cols-[256px_auto] grid-rows-[56px_auto] h-screen');

    return (
      <div 
        className={wrapperClasses}
        style={{gridTemplateAreas: `"p-top_nav p-top_nav" "p-workspace__sidebar p-workspace__primary_view"`}}
      >
        <div style={{gridArea: 'p-top_nav'}}>
          Top Navigation goes here
        </div>
        <Sidebar className='bg-brand-400' style={{gridArea: 'p-workspace__sidebar'}}>
          <div className='w-full flex flex-col p-4'>
            <h3>Sidebar 1</h3>
            <div className='w-full'>1. First item</div>
            <div className='w-full'>2. Second item</div>
            <div className='w-full'>3. Third item</div>
            <div className='w-full'>4. Fourth item</div>
            <div className='w-full'>5. Fifth item</div>
          </div>
        </Sidebar>
        <div className='overflow-y-auto flex' style={{gridArea: 'p-workspace__primary_view'}}>
          <Sidebar className='bg-gray-100' isCollapsible collapsed={collapsed} onOpenChange={() => setCollapsed(!collapsed)}>
            <div className='w-full flex flex-col p-4'>
              <h3>Sidebar 2</h3>
              <div className='w-full'>6. First item</div>
              <div className='w-full'>7. Second item</div>
              <div className='w-full'>8. Third item</div>
              <div className='w-full'>9. Fourth item</div>
              <div className='w-full'>10. Fifth item</div>
            </div>
          </Sidebar>
          <div className='p-4'>Content goes here</div>
        </div>
      </div>
    );
  }
};
