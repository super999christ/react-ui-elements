import {
  flip,
  FloatingPortal,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  Placement,
} from "@floating-ui/react";
import { faAngleLeft, faAngleRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactDatePickerProps } from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import styles from "./DatePicker.module.css";

import { getYearsObject } from "./helpers";
import Select from "../Select";
import { GroupBase, StylesConfig } from "react-select";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

const selectStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
  control(base, state) {
    return {
      ...base,
      display: "flex",
      border: state.isFocused
        ? "1px solid #84A9FF"
        : "1px solid rgb(234 236 240)",
      boxShadow: state.isFocused ? "0px 0px 0px 4px #D6E4FF" : "none",
      borderRadius: 4,
      minHeight: "30px",
    };
  },
  placeholder(base) {
    return {
      ...base,
      fontSize: 12,
      position: "relative",
      lineHeight: 0,
    };
  },
  indicatorSeparator(base) {
    return {
      ...base,
      backgroundColor: "rgb(234 236 240)",
    };
  },
  menu(base) {
    return {
      ...base,
      border: "1px solid rgb(234 236 240)",
      boxShadow: "none",
      Index: 100,
    };
  },
  menuPortal(base) {
    return { ...base, borderColor: "red", zIndex: 100 };
  },
  menuList(base) {
    return {
      ...base,
      fontSize: 12,
    };
  },
  singleValue(base) {
    return {
      ...base,
      fontSize: 12,
    };
  },
  option(base, state) {
    return {
      ...base,
      // eslint-disable-next-line no-nested-ternary
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected
        ? "#572BD6"
        : state.isFocused
        ? "#CCBFF2"
        : "transparent",
      ":active": {
        backgroundColor: "#572BD6",
      },
    };
  },
};

const DatePicker = ({
  children,
  label,
  placement,
  onChange,
  closeOnSelection = true,
  ...props
}: {
  children: React.ReactNode;
  label?: string;
  placement?: Placement;
  closeOnSelection?: boolean;
  onChange: (date: Date) => void;
} & Omit<ReactDatePickerProps, "onChange">) => {
  const [open, setOpen] = useState(false);
  const { context, refs, floatingStyles } = useFloating({
    open,
    placement: placement || "bottom",
    onOpenChange: (isOpen) => setOpen(isOpen),
    middleware: [
      offset(10),
      flip({
        crossAxis: true,
        fallbackAxisSideDirection: "none",
        padding: 5,
      }),
    ],
  });

  const dismiss = useDismiss(context);
  const click = useClick(context, { event: "mousedown" });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const isToday = moment(props.selected).isSame(new Date(), "day");

  return (
    <>
      {React.isValidElement(children) && (
        <>
          {React.cloneElement(children as React.ReactElement, {
            ref: refs.setReference,
            ...getReferenceProps(),
          })}
        </>
      )}
      {open && (
        <FloatingPortal>
          <div
            className={styles["datepicker--wrapper"]}
            ref={refs.setFloating}
            {...getFloatingProps()}
            style={{
              ...floatingStyles,
            }}
          >
            <ReactDatePicker
              inline
              {...props}
              selected={props.selected}
              timeIntervals={5}
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
              }) => {
                const years = getYearsObject(
                  moment().set("year", 1990).toDate(),
                  moment().toDate(),
                  false
                );
                const months = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => {
                  return { label: month, value: index };
                });
                return (
                  <div className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-600">
                    <div className="mr-auto pl-2">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                        onClick={() => decreaseMonth()}
                      >
                        <FontAwesomeIcon
                          icon={faAngleLeft}
                          className="text-gray-700"
                          size="sm"
                        />
                      </span>
                    </div>
                    <div className="w-[120px]">
                      <Select
                        instanceId="month"
                        id="month"
                        placeholder="Month"
                        value={months.find(
                          (month) => month.label === moment(date).format("MMMM")
                        )}
                        options={months}
                        onChange={(month: any) => changeMonth(month.value)}
                        styles={selectStyles}
                      />
                    </div>
                    <div className="w-[86px]">
                      <Select
                        instanceId="year"
                        id="year"
                        placeholder="Month"
                        value={{
                          label: moment(date).format("YYYY"),
                          value: Number(moment(date).format("YYYY")),
                        }}
                        options={years}
                        onChange={(month: any) => changeYear(month.value)}
                        styles={selectStyles}
                      />
                    </div>
                    <div className="ml-auto pr-2">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                        onClick={() => increaseMonth()}
                      >
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-gray-700"
                          size="sm"
                        />
                      </span>
                    </div>
                  </div>
                );
              }}
              dateFormat="Pp"
              onChange={(date) => {
                if (date) {
                  onChange(date);
                }
                if (closeOnSelection) {
                  setOpen(false);
                }
              }}
              value={props.value}
            />
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default DatePicker;
