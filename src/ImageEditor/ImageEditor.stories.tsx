import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ImageEditor from "./ImageEditor";
import { createS3ImageStore } from "./S3";

const s3ImageStore = createS3ImageStore({
  bucketPath: "sponsors-test",
});

const ImageEditorWrapper = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[400px]">
        <ImageEditor
          store={s3ImageStore}
          token="b081a1d3-2efd-4953-9ef3-63f87b73aaed"
          editorConfig={{
            targetSize: {
              width: 600,
            },
          }}
          onImageUpload={(response) =>
            console.log(`Image endpoint: ${response.pintura.store.uploadURL}`)
          }
        />
      </div>
      <div className="w-[400px]">
        <ImageEditor
          store={s3ImageStore}
          token="b081a1d3-2efd-4953-9ef3-63f87b73aaed"
          editorConfig={{
            targetSize: {
              width: 600,
            },
          }}
          onImageUpload={(response) =>
            console.log(`Image endpoint: ${response.pintura.store.uploadURL}`)
          }
          initialImages={[
            "https://images.pickleball.com/sponsors-test/1696339420567/pexels-photo-15591206.webp",
          ]}
        />
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
  },
} satisfies Meta<typeof ImageEditorWrapper>;

export default meta;
type Story = StoryObj<typeof ImageEditorWrapper>;

/* Custom close button in children prop */
export const Editor: Story = {
  args: {},
};
