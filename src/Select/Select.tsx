/* eslint-disable no-nested-ternary */
import { faAngleDown, faTimes } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type { GroupBase, Props as ReactSelectProps } from "react-select";
import ReactSelect from "react-select";
import styles from "./Select.module.css";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { SelectLabel } from "./SelectLabel";

export interface SelectProps extends ReactSelectProps {
  label?: string;
  noBorder?: boolean;
  noSeparator?: boolean;
  customHeight?: number;
}

const CaretDownIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faAngleDown}
      className={styles["caret-icon-svg"]}
      size="sm"
    />
  );
};

const MultiValueRemoveIcon = ({ innerProps }: any) => {
  return (
    <div {...innerProps} className={styles["clear-icon"]}>
      <FontAwesomeIcon
        icon={faTimes}
        className={styles["clear-icon-svg"]}
        size="xs"
      />
    </div>
  );
};

const ClearIcon = ({ innerProps }: any) => {
  return (
    <div {...innerProps} style={{ paddingInline: 10, cursor: 'pointer' }}>
      <FontAwesomeIcon
        icon={faTimes}
      />
    </div>
  );
};

const Select = ({ ...props }: SelectProps) => {
  let components: Partial<SelectComponents<unknown, boolean, GroupBase<unknown>>> | undefined = {
    DropdownIndicator: CaretDownIcon,
    MultiValueRemove: MultiValueRemoveIcon,
    ClearIndicator: ClearIcon,
  }
  if (props.noSeparator) {
    components = {...components, IndicatorSeparator: () => null };
  }
  return (
    <>
      {props.label && <SelectLabel id={props.id}>{props.label}</SelectLabel>}
      <ReactSelect
        components={components}
        styles={{
          control(base, state) {
            return {
              ...base,
              display: "flex",
              border: props.noBorder ? 
                "none"
                : state.isFocused ?
                  "1px solid #AB95EA"
                  : "1px solid rgb(234 236 240)",
              boxShadow: !props.noBorder && state.isFocused ? "0px 0px 0px 4px #CCBFF2" : "none",
              "&:hover": {
                border: props.noBorder ? 
                  "none"
                  : state.isFocused ?
                    "1px solid #AB95EA"
                    : "1px solid rgb(234 236 240)",
              },
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 400,
              height: props.customHeight ? `${props.customHeight}px` : base.height,
              minHeight: props.customHeight ? `${props.customHeight}px` : base.minHeight,
            };
          },
          placeholder(base) {
            return {
              ...base,
              fontSize: 14,
            };
          },
          input(base, props) {
            return {
              ...base,
              "> input": {
                border: 'none !important',
                boxShadow: "none !important",
                "&:focus": {
                  border: 'none !important',
                  boxShadow: "none !important",
                }
              }
            }
          },
          indicatorSeparator(base) {
            return {
              ...base,
              backgroundColor: "rgb(234 236 240)",
            };
          },
          indicatorsContainer: (base, state) => ({
            ...base,
            height: props.customHeight ? `${props.customHeight}px` : base.height,
          }),
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
          singleValue(base) {
            return {
              ...base,
              height: props.customHeight ? `${props.customHeight}px` : base.height,
              lineHeight: props.customHeight ? `${props.customHeight}px` : base.lineHeight,
            };
          },
          multiValue(base) {
            return {
              ...base,
              paddingInline: 2,
              borderRadius: 20,
              display: "inline-flex",
              alignItems: "center",
              marginTop: props.customHeight ? '0px' : base.marginTop,
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
          valueContainer(base) {
            return {
              ...base,
              padding: props.noSeparator ? '0 0 0 4px' : props.customHeight ? '0 8px' : base.padding,
              height: props.customHeight ? `${props.customHeight}px` : base.height,
            }
          },
          option(base, state) {
            return {
              ...base,
              // eslint-disable-next-line no-nested-ternary
              backgroundColor: state.isSelected
                ? "#CCBFF2"
                : state.isFocused
                ? "#EEE9FA"
                : "transparent",
              color: state.isFocused ? "" : state.isSelected ? "#000000" : "",
              "&:active": {
                backgroundColor: state.isSelected
                  ? "#CCBFF2"
                  : state.isFocused
                  ? "#EEE9FA"
                  : "transparent",
              },
              padding: props.customHeight ? '5px 8px' : base.padding,
            };
          },
        }}
        {...props}
      />
    </>
  );
};

export default Select;
