import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '..';
import Modal, {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeading,
} from './Modal';

export const ModalControlled = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} size="sm">
        Open
      </Button>
      <Modal open={open} onOpenChange={(opened) => setOpen(false)}>
        <ModalContent
          className="flex flex-col justify-center"
          style={{ width: 400 }}
        >
          <ModalHeading className="w-full flex items-center justify-between">
            <div className="flex-1 text-lg font-semibold leading-7">
              Delete blog post
            </div>
            <ModalClose className="ml-auto">
              <FontAwesomeIcon
                icon={faTimes}
                size="xl"
                className="text-gray-500"
              />
            </ModalClose>
          </ModalHeading>
          <ModalDescription className="mt-4 text-base font-normal text-gray-600">
            Are you sure you want to delete this post?
          </ModalDescription>
          <div className="flex justify-end gap-2 pt-6">
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" destructive>
              Delete
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalControlledNoBackdropClose = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} size="sm">
        Open
      </Button>
      <Modal open={open} onOpenChange={(opened) => setOpen(false)} backdropClose={false}>
        <ModalContent
          className="flex flex-col justify-center"
          style={{ width: 400 }}
        >
          <ModalHeading className="w-full flex items-center justify-between">
            <div className="flex-1 text-lg font-semibold leading-7">
              Delete blog post
            </div>
            <ModalClose className="ml-auto">
              <FontAwesomeIcon
                icon={faTimes}
                size="xl"
                className="text-gray-500"
              />
            </ModalClose>
          </ModalHeading>
          <ModalDescription className="mt-4 text-base font-normal text-gray-600">
            Are you sure you want to delete this post?
          </ModalDescription>
          <div className="flex justify-end gap-2 pt-6">
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" destructive>
              Delete
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

const meta = {
  title: 'Application/Modal',
  component: ModalControlled,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
