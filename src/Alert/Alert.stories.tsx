import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';
import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { faComputer } from '@fortawesome/pro-light-svg-icons';

const meta = {
  title: 'Design System/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-gray-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-primary-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'We’ve just released a new feature'
  }
}

export const Primary: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-primary-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-primary-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'We’ve just released a new feature',
    type: 'primary'
  }
}

export const Gray: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-gray-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-primary-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'We’ve just released a new feature',
    type: 'gray'
  }
}

export const Error: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-error-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-error-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'There was a problem with that action',
    type: 'error'
  }
}

export const Warning: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-warning-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-warning-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'Just to let you know this might be a problem',
    type: 'warning'
  }
}

export const Success: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-success-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-success-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'Successfully updated profile',
    type: 'success'
  }
}

export const DefaultWithCustomFeaturedIcon: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-gray-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-primary-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    FeaturedIcon: () => <FontAwesomeIcon icon={faComputer} />,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'We’ve just released a new feature'
  }
}

export const SuccessWithCustomFeaturedIcon: Story = {
  args: {
    children: <div className='flex flex-row flex-start gap-3'>
      <Button className='!text-success-600' size='sm' variant='link'>Learn more</Button>
      <Button className='!text-success-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
    </div>,
    FeaturedIcon: () => <FontAwesomeIcon icon={faComputer} className='text-success-700' />,
    SupportingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    Text: 'Successfully updated profile',
    type: 'success',
    onClose: () => console.log('Close the alert...'),
  }
}

export const SuccessWithCustomIconAndState: Story = {
  render: () => {
    const [isOpened, setIsOpened] = React.useState<boolean>(true);

    return (
      <>
        {isOpened ?
          <Alert
            FeaturedIcon={() => <FontAwesomeIcon icon={faComputer} className='text-success-700' />}
            onClose={() => setIsOpened(false)}
            SupportingText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
            Text='Successfully updated profile'
            type='success'
          >
            <div className='flex flex-row flex-start gap-3'>
              <Button className='!text-success-600' size='sm' variant='link'>Learn more</Button>
              <Button className='!text-success-700' suffixIcon={<FontAwesomeIcon icon={faArrowRight} />} size='sm' variant='link'>View changes</Button>
            </div>
          </Alert>
          : <div className='flex flex-col gap-2'>
              <p>You've closed the alert.</p>
              <Button onClick={() => setIsOpened(true)}>Reopen the alert</Button>
            </div>
        }
      </>
    );
  }
};