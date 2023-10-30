import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Documetation from './Documentation.mdx';

import ImageEditor from "./ImageEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-light-svg-icons";

const ImageEditorWrapper = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[400px]">
        <ImageEditor isCircle width={120} height={120} onClearImage={() => console.log('Cleared')}>
          <FontAwesomeIcon icon={faUser} size="xl" />
        </ImageEditor>
      </div>
    </div>
  );
};

const meta = {
  title: "Design System/ImageEditor",
  component: ImageEditorWrapper,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
    },
  },
} satisfies Meta<typeof ImageEditorWrapper>;

export default meta;
type Story = StoryObj<typeof ImageEditorWrapper>;

/* Custom close button in children prop */
export const Editor: Story = {
  args: {},
};
