import {
  flip,
  FloatingPortal,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  Placement,
  shift,
} from "@floating-ui/react";
import { faAngleLeft, faAngleRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment, { months } from "moment";
import React, { useEffect, useRef, useState } from "react";
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
      shift({ padding: 5 })
    ],
  });

  const dismiss = useDismiss(context);
  const click = useClick(context, { event: "mousedown" });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

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
                const getMinYear = props.minDate ? moment(props.minDate).get('year') : moment().subtract(110, 'years').get('year')
                const getMaxYear = props.maxDate ? moment(props.maxDate) : moment()
                const years = getYearsObject(
                  moment().set("year", getMinYear).toDate(),
                  getMaxYear.toDate(),
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
                  <div className={styles["header-container"]}>
                    <div className={styles["left-arrow-container"]}>
                      <span
                        aria-hidden="true"
                        className={styles["header-navigate-month"]}
                        onClick={() => decreaseMonth()}
                      >
                        <FontAwesomeIcon
                          icon={faAngleLeft}
                          className={styles['header-navigate-month-icon']}
                          size="sm"
                        />
                      </span>
                    </div>
                    <div className={styles['header-dropdown-month']}>
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
                    <div className={styles['header-dropdown-year']}>
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
                    <div className={styles["right-arrow-container"]}>
                      <span
                        aria-hidden="true"
                        className={styles["header-navigate-month"]}
                        onClick={() => increaseMonth()}
                      >
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className={styles['header-navigate-month-icon']}
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
