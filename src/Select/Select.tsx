/* eslint-disable no-nested-ternary */
import { faAngleDown, faTimes } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type { Props as ReactSelectProps } from "react-select";
import ReactSelect from "react-select";

export interface SelectProps extends ReactSelectProps {}

const CaretDownIcon = () => {
  return <FontAwesomeIcon icon={faAngleDown} className="px-2" size="sm" />;
};

const ClearIcon = ({ innerProps }: any) => {
  return (
    <div
      {...innerProps}
      className="ml-1 flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full hover:bg-error-200"
    >
      <FontAwesomeIcon
        icon={faTimes}
        className="cursor-pointer px-2 text-gray-600"
        size="xs"
      />
    </div>
  );
};

const Select = ({ ...props }: SelectProps) => {
  return (
    <ReactSelect
      menuPortalTarget={document.body || null}
      components={{
        DropdownIndicator: CaretDownIcon,
        MultiValueRemove: ClearIcon,
      }}
      styles={{
        control(base, state) {
          return {
            ...base,
            display: "flex",
            border: state.isFocused
              ? "1px solid #84A9FF"
              : "1px solid rgb(234 236 240)",
            boxShadow: state.isFocused ? "0px 0px 0px 4px #D6E4FF" : "none",
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 400,
          };
        },
        placeholder(base) {
          return {
            ...base,
            fontSize: 14,
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
            zIndex: 100,
          };
        },
        menuPortal(base) {
          return { ...base, borderColor: "red", zIndex: 100 };
        },
        menuList(base) {
          return {
            ...base,
            fontSize: 14,
          };
        },
        multiValue(base) {
          return {
            ...base,
            paddingInline: 2,
            borderRadius: 20,
            display: "inline-flex",
            alignItems: "center",
          };
        },
        multiValueLabel(base) {
          return {
            ...base,
            fontSize: 12,
          };
        },
        multiValueRemove(base) {
          return {
            ...base,
            height: 20,
            width: 20,
            borderRadius: 500,
          };
        },
        option(base, state) {
          return {
            ...base,
            // eslint-disable-next-line no-nested-ternary
            backgroundColor: state.isFocused
              ? "#ebf8ff"
              : state.isSelected
              ? "#ebf8ff"
              : "transparent",
            color: state.isFocused ? "" : state.isSelected ? "#000000" : "",
            "&:active": {
              backgroundColor: state.isFocused
                ? "#ebf8ff"
                : state.isSelected
                ? "#ebf8ff"
                : "transparent",
            },
          };
        },
      }}
      {...props}
    />
  );
};

export default Select;
