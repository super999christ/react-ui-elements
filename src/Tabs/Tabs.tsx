import React, { forwardRef } from 'react';
import clsx from 'clsx';

import Tab, { TabSize, TabVariant } from './Tab';
import Select from './../Select';

import styles from './Tabs.module.css';

export interface TabInterface {
  value: string;
  label: string;
}

export type TabsType = 'horizontal' | 'vertical';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  active: string;
  className?: string;
  fullWidth?: boolean;
  options: TabInterface[];
  size: TabSize;
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
      fullWidth,
      options,
      size,
      tabClassname,
      type = 'horizontal',
      variant = 'primary',
      onChange,
      ...rest
    } = props;

    const tabsClasses = clsx(styles.tabs, {
      [styles['tabs--type-horizontal']]: type === 'horizontal',
      [styles['tabs--type-vertical']]: type === 'vertical',
      [styles['tabs--full-width']]: fullWidth,
      [styles['tabs--underline']]: type === 'horizontal' && (variant === 'underline' || variant === 'underline-filled'),
      [styles['tabs--white-border']]: variant === 'white-border',
      [styles['tabs--white-border-vertical']]: type === 'vertical' && variant === 'white-border',
    }, className);

    const selectClasses = clsx(styles.select, className);

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
        <Select
          className={selectClasses}
          menuPortalTarget={document.body}
          onChange={onChange}
          options={options}
        />
      </>
    );
  },
);

export default Tabs;
