import type { Meta, StoryObj } from "@storybook/react";

import ImageEditor from "./ImageEditor";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser } from "@fortawesome/pro-light-svg-icons";

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
    dropzoneClassName: '!border-gray-700'
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
    height: 100,
    onClearImage: () => console.log('Cleared'),
    width: 160,
    editorConfig: {
      aspectRatio: 1.6,
      targetSize: {
        width: 320,
        height: 200,
      },
    }
  }
};

export const CustomEditorConfigWithMinMaxCropWidthAndMinMaxCropHeight: Story = {
  args: {
    children: <FontAwesomeIcon icon={faUser} size="xl" />,
    height: 100,
    onClearImage: () => console.log('Cleared'),
    width: 160,
    editorConfig: {
      aspectRatio: 1.6,
      targetSize: {
        width: 160,
        height: 100,
      },
      imageCropMinSize: {
        width: 80,
        height: 50,
      },
      imageCropMaxSize: {
        width: 320,
        height: 200,
      }
    }
  }
};

export const CustomEditorConfigWithMinMaxCropWidthAndMinMaxCropHeightAndCustomClearIndicator: Story = {
  args: {
    children: <FontAwesomeIcon icon={faUser} size="xl" />,
    height: 100,
    onClearImage: () => console.log('Cleared'),
    width: 160,
    editorConfig: {
      aspectRatio: 1.6,
      targetSize: {
        width: 160,
        height: 100,
      },
      imageCropMinSize: {
        width: 80,
        height: 50,
      },
      imageCropMaxSize: {
        width: 320,
        height: 200,
      }
    },
    clearIndicator: (
      <div className="border border-solid border-gray-300 flex justify-center items-center rounded-full w-5 h-5 bg-gray-200 hover:bg-gray-300">
        <FontAwesomeIcon icon={faTimes} size="sm" />
      </div>
    )
  }
};

export const ImageEditorCircleCenterIndicatorCircleCrop: Story = {
  args: {
    children: <FontAwesomeIcon icon={faUser} size="xl" />,
    clearIndicatorPosition: 'center',
    height: 240,
    isCircle: true,
    onClearImage: () => console.log('Cleared'),
    width: 240,
    dropzoneClassName: '!border-gray-700',
    editorConfig: {
      aspectRatio: 1,
      imageCropMinSize: {
        width: 50,
        height: 50,
      },
    },
  }
};
