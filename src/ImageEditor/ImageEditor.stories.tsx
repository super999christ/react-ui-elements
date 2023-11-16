import type { Meta, StoryObj } from "@storybook/react";

import ImageEditor from "./ImageEditor";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-light-svg-icons";

const meta = {
  title: "Design System/ImageEditor",
  component: ImageEditor,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ImageEditor>;

export default meta;
type Story = StoryObj<typeof ImageEditor>;

export const Default: Story = {
  args: {
    children: <FontAwesomeIcon icon={faUser} size="xl" />,
    height: 240,
    onClearImage: () => console.log('Cleared'),
    width: 240,
  }
};

export const ImageEditorCircleCenterIndicator: Story = {
  args: {
    children: <FontAwesomeIcon icon={faUser} size="xl" />,
    clearIndicatorPosition: 'center',
    height: 240,
    isCircle: true,
    onClearImage: () => console.log('Cleared'),
    width: 240,
  }
};

export const ImageEditorCircleTopRightIndicator: Story = {
  args: {
    children: <FontAwesomeIcon icon={faUser} size="xl" />,
    clearIndicatorPosition: 'top-right',
    height: 240,
    isCircle: true,
    onClearImage: () => console.log('Cleared'),
    width: 240,
  }
};

export const CustomEditorConfig: Story = {
  args: {
    children: <FontAwesomeIcon icon={faUser} size="xl" />,
    height: 200,
    onClearImage: () => console.log('Cleared'),
    width: 320,
    editorConfig: {
      aspectRatio: 1.6,
      targetSize: {
        width: 160,
        height: 100,
      },
    }
  }
};
