import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./DatePicker";
import moment from "moment";

const meta = {
  title: "Design System/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    children: <span>Click to open</span>
  },
};

export const WithTime: Story = {
  args: {
    showTimeSelect: true,
    children: <span>Click to open</span>
  },
};

export const WithTimeAndPlacementRight: Story = {
  args: {
    showTimeSelect: true,
    children: <span>Click to open</span>,
    placement: 'right' // If 'right' placement 
  },
};

export const DatePickerFullExampleWithState: Story = {
  render: () => {
    const [date, setDate] = useState<string>();

    return (
      <DatePicker
        label="From"
        selected={date ? new Date(date) : null}
        showTimeSelect={true}
        placement="bottom"
        onChange={(date) => 
          setDate(
            moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
          )
        }
      >
        <span>{date ? moment(date).format("MMM DD, YYYY") : "Click to open"}</span>
      </DatePicker>
    );
  }
};

export const DatePickerMinDateMaxDateFullExampleWithState: Story = {
  render: () => {
    const [date, setDate] = useState<string>();

    return (
      <DatePicker
        label="From"
        selected={date ? new Date(date) : null}
        showTimeSelect={true}
        placement="bottom"
        minDate={new Date('01/10/1990')}
        maxDate={new Date('01/10/1991')}
        onChange={(date) => 
          setDate(
            moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
          )
        }
      >
        <span>{date ? moment(date).format("MMM DD, YYYY") : "Click to open"}</span>
      </DatePicker>
    );
  }
};

export const DatePickerFullExampleWithStateAndCustomPlaceholder: Story = {
  render: () => {
    const [date, setDate] = useState<string>();

    return (
      <DatePicker
        label="From"
        selected={date ? new Date(date) : null}
        showTimeSelect={true}
        placement="bottom"
        onChange={(date) => 
          setDate(
            moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
          )
        }
      >
        {date ? 
          <div className="flex w-fit px-3 py-1 bg-brand-100">{moment(date).format("MMM DD, YYYY")}</div>
          : 
          <span className="underline hover:cursor-pointer">Click to open</span>
        }
      </DatePicker>
    );
  }
};

export const DatePickerFullExampleWithStateAndCustomPlaceholderAndCustomZIndex: Story = {
  render: () => {
    const [date, setDate] = useState<string>();

    return (
      <DatePicker
        label="From"
        selected={date ? new Date(date) : null}
        showTimeSelect={true}
        placement="bottom"
        onChange={(date) => 
          setDate(
            moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
          )
        }
        wrapperZIndex="60"
      >
        {date ? 
          <div className="flex w-fit px-3 py-1 bg-brand-100">{moment(date).format("MMM DD, YYYY")}</div>
          : 
          <span className="underline hover:cursor-pointer">Click to open</span>
        }
      </DatePicker>
    );
  }
};