import { faChevronsRight, faChevronsLeft } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Sidebar.module.css';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  collapsed?: boolean;
  collapsingIconClasses?: string;
  collapsedWidth?: number;
  uncollapsedWidth?: number;
  initialyClosed?: boolean;
  isCollapsible?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  function Sidebar(props, ref) {
    const {
      children,
      className,
      collapsed,
      collapsingIconClasses,
      collapsedWidth = 40,
      uncollapsedWidth = 256,
      initialyClosed = false,
      isCollapsible = false,
      onOpenChange,
      ...rest
    } = props;
    const [localCollapsed, setLocalCollapsed] = React.useState<boolean>();

    const close = collapsed ?? localCollapsed ?? initialyClosed;
    const setClose = collapsed !== undefined && onOpenChange ? onOpenChange : setLocalCollapsed;
  
    const containerClasses = clsx(styles.container, className);

    const iconContainerClasses = clsx(styles['icon__container'], {
      [styles['icon__container--collapsed']]: close,
      [styles['icon__container--not-collapsed']]: !close,
    })

    const iconClasses = clsx(styles.icon, collapsingIconClasses);

    return (
      <div style={{width: close ? collapsedWidth : uncollapsedWidth }} className={containerClasses} {...rest} ref={ref}>
        {isCollapsible ? (
          <>
            <div className={iconContainerClasses}>
              <FontAwesomeIcon
                icon={close ? faChevronsRight : faChevronsLeft}
                size="sm"
                className={iconClasses}
                onClick={() => setClose(!close)}
              />
            </div>
            {!close && children}
          </>
        ) : children}
      </div>
    );
  },
);

export default Sidebar;
