import React, { forwardRef } from 'react';
import clsx from 'clsx';

import Tab, { TabIconPosition, TabSize, TabVariant } from './Tab';
import Select from './../Select';

import styles from './Tabs.module.css';

export interface TabInterface {
  value: string;
  label: string;
  icon?: React.ReactNode;
  iconPosition?: TabIconPosition;
}

export type TabsType = 'horizontal' | 'vertical';
export type TabsDropdownBreakpoint = 'sm' | 'md';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  active: string;
  className?: string;
  disableDropdown?: boolean;
  dropdownBreakpoint?: TabsDropdownBreakpoint;
  fullWidth?: boolean;
  menuPortalTarget?: HTMLElement | null | undefined;
  options: TabInterface[];
  size?: TabSize;
  tabClassname?: string;
  type?: TabsType;
  variant?: TabVariant;
  onChange?: (e: any) => void;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  function Tabs(props, ref) {
    const {
      active,
      className,
      disableDropdown = false,
      dropdownBreakpoint = 'sm',
      fullWidth,
      menuPortalTarget,
      options,
      size = 'md',
      tabClassname,
      type = 'horizontal',
      variant = 'primary',
      onChange,
      ...rest
    } = props;

    const tabsClasses = clsx(styles.tabs, {
      [styles['tabs--dropdown__breakpoint--sm']]: dropdownBreakpoint === 'sm',
      [styles['tabs--dropdown__breakpoint--md']]: dropdownBreakpoint === 'md',
      [styles['tabs--type-horizontal']]: type === 'horizontal',
      [styles['tabs--type-vertical']]: type === 'vertical',
      [styles['tabs--full-width']]: fullWidth,
      [styles['tabs--underline']]: type === 'horizontal' && (variant === 'underline' || variant === 'underline-filled'),
      [styles['tabs--white-border']]: variant === 'white-border',
      [styles['tabs--white-border-vertical']]: type === 'vertical' && variant === 'white-border',
      [styles['tabs--disabled-dropdown']]: disableDropdown,
    }, className);

    const selectClasses = clsx(styles.select, {
      [styles['select--dropdown__breakpoint--sm']]: dropdownBreakpoint === 'sm',
      [styles['select--dropdown__breakpoint--md']]: dropdownBreakpoint === 'md',
    }, className);

    const tabClasses = clsx({
      [styles['tab--full-width']]: fullWidth,
      [styles['tab--vertical']]: type === 'vertical',
    }, tabClassname);

    return (
      <>
        <div className={tabsClasses} ref={ref} {...rest}>
          {
            options.map(option => {
              return (
                <Tab
                  key={option.value}
                  active={active === option.value}
                  className={tabClasses}
                  icon={option.icon}
                  iconPosition={option.iconPosition}
                  onClick={onChange}
                  size={size}
                  value={option.value}
                  variant={variant}
                >
                  {option.label}
                </Tab>
              );
            })
          }
        </div>
        {!disableDropdown &&
          <Select
            className={selectClasses}
            menuPortalTarget={menuPortalTarget}
            onChange={onChange}
            options={options.map(option => ({ 
              value: option.value,
              label: 
                option.icon && option.iconPosition ?
                  option.iconPosition === 'prefix' ?
                    <span>{option.icon} {option.label}</span>
                    :
                    <span>{option.label} {option.icon}</span> 
                  :
                  <span>{option.label}</span>
            }))}
          />
        }
      </>
    );
  },
);

export default Tabs;
