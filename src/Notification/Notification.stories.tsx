import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Notification from './Notification';
import Button from '../Button';
import ProgressBar from '../ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/pro-regular-svg-icons';

const meta = {
  title: 'Design System/Notification',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    children:
      <div className='flex flex-row flex-start gap-3'>
        <Button className='!text-gray-600' size='sm' variant='link'>Dismiss</Button>
        <Button className='!text-primary-700' size='sm' variant='link'>View changes</Button>
      </div>,
    SupportingText: 'Your team has made changes to your company profile since you last logged in.',
    Text: 'Updates have been made to your profile'
  },
};

export const Image: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start gap-3'>
        <Button className='!text-gray-600' size='sm' variant='link'>Dismiss</Button>
        <Button className='!text-primary-700' size='sm' variant='link'>Changelog</Button>
      </div>,
    imageAlt: 'From Figma UI-kit',
    imageLink: 'https://smgmt.org/wp-content/uploads/2023/08/pickleball-image.jpg',
    SupportingText: 'Check out the all new dashboard view. Pages and exports now load faster.',
    Text: 'We’ve just released a new update!',
    type: 'image'
  },
};

export const Avatar: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start gap-3'>
        <Button className='!text-gray-600' size='sm' variant='link'>Dismiss</Button>
        <Button className='!text-primary-700' size='sm' variant='link'>Changelog</Button>
      </div>,
    SupportingText: 'I’ve finished adding my notes. Happy for us to review whenever you’re ready!',
    Text: 'Katherine Moss',
    time: '2 mins ago',
    type: 'avatar'
  },
};

export const PrimaryIcon: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start gap-3'>
        <Button className='!text-gray-600' size='sm' variant='link'>Dismiss</Button>
        <Button className='!text-primary-700' size='sm' variant='link'>Changelog</Button>
      </div>,
    SupportingText: 'Check out the all new dashboard view. Pages and exports now load faster.',
    Text: 'We’ve just released a new update!',
    type: 'primary-icon'
  },
};

export const GrayIcon: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start gap-3'>
        <Button className='!text-gray-600' size='sm' variant='link'>Later</Button>
        <Button className='!text-primary-700' size='sm' variant='link'>Install now</Button>
      </div>,
    SupportingText: 'Includes the all new dashboard view. Pages and exports will now load faster.',
    Text: 'Version 1.4.1 is now available',
    type: 'gray-icon'
  },
};

export const ProgressIndicator: Story = {
  args: {
    children: 
      <>
        <ProgressBar progress={60} label='60% uploaded...' labelPlacement='bottom' />
        <div className='flex flex-row flex-start gap-3'>
          <Button className='!text-gray-600' size='sm' variant='link'>Cancel</Button>
          <Button className='!text-primary-700' size='sm' variant='link'>Upload another</Button>
        </div>
      </>,
    SupportingText: 'Please wait while we upload your file.',
    Text: 'Uploading ‘website-FINAL06.fig’',
    type: 'progress-indicator'
  },
};

export const ErrorIcon: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start'>
        <Button className='!text-gray-600' size='sm' variant='link'>Undo action</Button>
      </div>,
    SupportingText: 'Removing all users has unpublished this project. Add users to republish.',
    Text: 'This project has been unpublished',
    type: 'error-icon'
  },
};

export const WarningIcon: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start'>
        <Button className='!text-gray-600' size='sm' variant='link'>Undo action</Button>
      </div>,
    SupportingText: 'Removing all users has unpublished this project. Add users to republish.',
    Text: 'This project has been unpublished',
    type: 'warning-icon'
  },
};

export const SuccessIcon: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start gap-3'>
        <Button className='!text-gray-600' size='sm' variant='link'>Dismiss</Button>
        <Button className='!text-primary-700' size='sm' variant='link'>View changes</Button>
       </div>,
    SupportingText: 'Your changes have been saved and your profile is live. Your team can make edits.',
    Text: 'Successfully updated profile',
    type: 'success-icon'
  },
};

export const SuccessWithCustomIcon: Story = {
  args: {
    children: 
      <div className='flex flex-row flex-start gap-3'>
        <Button className='!text-gray-600' size='sm' variant='link'>Dismiss</Button>
        <Button className='!text-primary-700' size='sm' variant='link'>View changes</Button>
       </div>,
    CustomIcon: () => <FontAwesomeIcon icon={faComputer} className='text-experiment' />,
    isCloseable: true,
    onClose: () => console.log('Close the notification...'),
    SupportingText: 'Your changes have been saved and your profile is live. Your team can make edits.',
    Text: 'Successfully updated profile',
    type: 'success-icon',
  },
};

export const SuccessWithCustomIconAndState: Story = {
  render: () => {
    const [isOpened, setIsOpened] = React.useState<boolean>(true);
    return (
      <>
        {isOpened ?
          <Notification
            CustomIcon ={() => <FontAwesomeIcon icon={faComputer} className='text-experiment' />}
            isCloseable
            onClose={() => setIsOpened(false)}
            SupportingText='Your changes have been saved and your profile is live. Your team can make edits.'
            Text='Successfully updated profile'
            type='success-icon'
          >
            <div className='flex flex-row flex-start gap-3'>
              <Button className='!text-gray-600' size='sm' variant='link'>Dismiss</Button>
              <Button className='!text-primary-700' size='sm' variant='link'>View changes</Button>
            </div>
          </Notification>
          : <div className='flex flex-col gap-2'>
              <p>You've closed the notification.</p>
              <Button onClick={() => setIsOpened(true)}>Reopen the notification</Button>
            </div>
        }
      </>
    );
  }
};
