import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PageHeader from './PageHeader';

import AvatarOriginal from '../Avatar';
import Button from '../Button';
import InputField from '../InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/pro-light-svg-icons';

const meta = {
  title: 'Design System/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Simple: Story = {
  args: {
    BackButton: () => <Button variant='link-gray' size='md' onClick={() => console.log('Implement going back.')} prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
      Back
    </Button>,
    Breadcrumb: () => <div>Breadcrumb component</div>,
    text: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    children: <div className='flex flex-row flex-wrap gap-4'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
      <div className='w-full sm:w-[320px]' >
        <InputField placeholder='Search' PrefixIcon={() => <FontAwesomeIcon icon={faSearch} className='text-gray-500' />} />
      </div>
    </div>
  },
};

export const Avatar: Story = {
  args: {
    BackButton: () => <Button variant='link-gray' size='md' onClick={() => console.log('Implement going back.')} prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
      Back
    </Button>,
    Avatar: () => <AvatarOriginal size='2xl' />,
    MobileAvatar: () => <AvatarOriginal size='xl' />,
    Breadcrumb: () => <div>Breadcrumb component</div>,
    text: 'Olivia Rhye',
    supportingText: 'olivia@untitledui.com',
    children: <div className='flex flex-row flex-wrap gap-4'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
      <div className='w-full sm:w-[320px]' >
        <InputField placeholder='Search' PrefixIcon={() => <FontAwesomeIcon icon={faSearch} className='text-gray-500' />} />
      </div>
    </div>,
    variant: 'avatar'
  },
};

export const BannerSimple: Story = {
  args: {
    BackButton: () => <Button variant='link-gray' size='md' onClick={() => console.log('Implement going back.')} prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
      Back
    </Button>,
    Breadcrumb: () => <div>Breadcrumb component</div>,
    text: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    children: <div className='flex flex-row flex-wrap gap-4'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
      <div className='w-full sm:w-[320px]' >
        <InputField placeholder='Search' PrefixIcon={() => <FontAwesomeIcon icon={faSearch} className='text-gray-500' />} />
      </div>
    </div>,
    variant: 'banner-simple'
  },
};

export const BannerAvatar: Story = {
  args: {
    BackButton: () => <Button variant='link-gray' size='md' onClick={() => console.log('Implement going back.')} prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
      Back
    </Button>,
    Avatar: () => <AvatarOriginal size='4xl' />,
    MobileAvatar: () => <AvatarOriginal size='3xl' />,
    Breadcrumb: () => <div>Breadcrumb component</div>,
    text: 'Olivia Rhye',
    supportingText: 'olivia@untitledui.com',
    children: <div className='flex flex-row flex-wrap gap-4'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
      <div className='w-full sm:w-[320px]' >
        <InputField placeholder='Search' PrefixIcon={() => <FontAwesomeIcon icon={faSearch} className='text-gray-500' />} />
      </div>
    </div>,
    variant: 'banner-avatar'
  },
};

export const BannerSimpleCentered: Story = {
  args: {
    BackButton: () => <Button variant='link-gray' size='md' onClick={() => console.log('Implement going back.')} prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
      Back
    </Button>,
    Breadcrumb: () => <div>Breadcrumb component</div>,
    text: 'Olivia Rhye',
    supportingText: 'olivia@untitledui.com',
    children: <div className='flex flex-col flex-wrap gap-4 justify-center items-center'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='tertiary' className='!hidden sm:!flex'>Tertiary</Button>
        <Button size='md' variant='secondary-color' className='!hidden sm:!flex'>Secondary</Button>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
      <div className='w-full sm:w-[320px]' >
        <InputField placeholder='Search' PrefixIcon={() => <FontAwesomeIcon icon={faSearch} className='text-gray-500' />} />
      </div>
    </div>,
    variant: 'banner-simple-centered'
  },
};

export const BannerAvatarCentered: Story = {
  args: {
    BackButton: () => <Button variant='link-gray' size='md' onClick={() => console.log('Implement going back.')} prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
      Back
    </Button>,
    Avatar: () => <AvatarOriginal size='4xl' />,
    MobileAvatar: () => <AvatarOriginal size='3xl' />,
    Breadcrumb: () => <div>Breadcrumb component</div>,
    text: 'Olivia Rhye',
    supportingText: 'olivia@untitledui.com',
    children: <div className='flex flex-col flex-wrap gap-4 justify-center items-center'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='tertiary' className='!hidden sm:!flex'>Tertiary</Button>
        <Button size='md' variant='secondary-color' className='!hidden sm:!flex'>Secondary</Button>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
      <div className='w-full sm:w-[320px]' >
        <InputField placeholder='Search' PrefixIcon={() => <FontAwesomeIcon icon={faSearch} className='text-gray-500' />} />
      </div>
    </div>,
    variant: 'banner-avatar-centered'
  },
};

export const BannerAvatarCenteredWithCustomBackground: Story = {
  args: {
    background: 'skyblue',
    BackButton: () => <Button variant='link-gray' size='md' onClick={() => console.log('Implement going back.')} prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
      Back
    </Button>,
    Avatar: () => <AvatarOriginal size='4xl' />,
    MobileAvatar: () => <AvatarOriginal size='3xl' />,
    Breadcrumb: () => <div>Breadcrumb component</div>,
    text: 'Olivia Rhye',
    supportingText: 'olivia@untitledui.com',
    children: <div className='flex flex-col flex-wrap gap-4 justify-center items-center'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Button size='md' variant='tertiary' className='!hidden sm:!flex'>Tertiary</Button>
        <Button size='md' variant='secondary-color' className='!hidden sm:!flex'>Secondary</Button>
        <Button size='md' variant='secondary'>Secondary</Button>
        <Button size='md' variant='primary'>Primary</Button>
      </div>
      <div className='w-full sm:w-[320px]' >
        <InputField placeholder='Search' PrefixIcon={() => <FontAwesomeIcon icon={faSearch} className='text-gray-500' />} />
      </div>
    </div>,
    variant: 'banner-avatar-centered'
  },
};
