import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./DatePicker";
import moment from "moment";

const DatePickerWrapper = () => {
  const [date, setDate] = useState<string>();

  return (
    <DatePicker
      label="From"
      selected={date ? new Date(date) : null}
      showTimeSelect={true}
      placement="bottom"
      onChange={(date) => {
        setDate(
          moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
        );
      }}
    >
      <span>{date ? moment(date).format("MMM DD, YYYY") : "Change"}</span>
    </DatePicker>
  );
};

const meta = {
  title: "Design System/DatePicker",
  component: DatePickerWrapper,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof DatePickerWrapper>;

export default meta;
type Story = StoryObj<typeof DatePickerWrapper>;

export const Default: Story = {
  args: {},
};
