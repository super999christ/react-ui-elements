import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Documetation from './Documentation.mdx';

import ImageEditor from "./ImageEditor";
import { createS3ImageStore } from "./S3";

const s3ImageStore = createS3ImageStore({
  bucketPath: "sponsors-test",
  uploadUrl: "https://images-uploader.pickleballdev.net/request",
});

const ImageEditorWrapper = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[400px]">
        <ImageEditor />
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
