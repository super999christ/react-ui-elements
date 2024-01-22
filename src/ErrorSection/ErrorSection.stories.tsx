import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ErrorSection from './ErrorSection';

import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faInfoCircle } from '@fortawesome/pro-light-svg-icons';

const meta = {
  title: 'Design System/ErrorSection',
  component: ErrorSection,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ErrorSection>;

export default meta;
type Story = StoryObj<typeof ErrorSection>;

export const Default: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
  }
};

export const DefaultCentered: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    centeredDesktop: true,
    centeredMobile: true
  }
};

export const DefaultCenteredWithCustomSubheading: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: () => <FontAwesomeIcon icon={faInfoCircle} className='w-8 h-8' />,
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    centeredDesktop: true,
    centeredMobile: true
  }
};

export const WithImage: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />
  }
};

export const MobileCenteredWithImage: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    centeredMobile: true
  }
};

export const DesktopCenteredWithImage: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    centeredDesktop: true
  }
};

export const CenteredWithImage: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    centeredDesktop: true,
    centeredMobile: true
  }
};

export const WithChildrenAndImage: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    children: <div className='flex flex-start gap-3 px-4 sm:px-8'>
      <Button prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />} size='xl' variant='secondary'>Go back</Button>
      <Button size='xl' variant='primary'>Take me home</Button>
    </div>
  }
};

export const WithChildrenAndImageReversedDesktop: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    children: <div className='flex flex-start gap-3 px-4 sm:px-8'>
      <Button prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />} size='xl' variant='secondary'>Go back</Button>
      <Button size='xl' variant='primary'>Take me home</Button>
    </div>,
    reverseOrderDesktop: true
  }
};

export const WithChildrenAndImageReversedMobile: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    children: <div className='flex flex-start gap-3 px-4 sm:px-8'>
      <Button prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />} size='xl' variant='secondary'>Go back</Button>
      <Button size='xl' variant='primary'>Take me home</Button>
    </div>,
    reverseOrderMobile: true
  }
};

export const WithChildrenAndImageReversedDesktopAndMobile: Story = {
  args: {
    heading: 'We can’t find that page',
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    children: <div className='flex flex-start gap-3 px-4 sm:px-8'>
      <Button prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />} size='xl' variant='secondary'>Go back</Button>
      <Button size='xl' variant='primary'>Take me home</Button>
    </div>,
    reverseOrderDesktop: true,
    reverseOrderMobile: true
  }
};

export const CustomHeadingWithChildrenAndImageReversedDesktopAndMobile: Story = {
  args: {
    heading: () => <h6 className='not-italic font-extrabold text-2xl'>We can’t find that page</h6>,
    Subheading: '404 error',
    supportingText: "Sorry, the page you are looking for doesn't exist or has been moved.",
    Image: () => <img className='max-w-full sm:max-h-screen' src='https://e0.pxfuel.com/wallpapers/412/709/desktop-wallpaper-huawei-landscape-mountain-paintings-nature-vertical-mountain.jpg' />,
    children: <div className='flex flex-start gap-3 px-4 sm:px-8'>
      <Button prefixIcon={<FontAwesomeIcon icon={faArrowLeft} />} size='xl' variant='secondary'>Go back</Button>
      <Button size='xl' variant='primary'>Take me home</Button>
    </div>,
    reverseOrderDesktop: true,
    reverseOrderMobile: true
  }
};
