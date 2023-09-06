import type { Placement } from '@floating-ui/react';
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
  hide,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';

import styles from './Menu.module.css';
import type { MenuItemProps } from './MenuItem';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';

interface MenuOptions {
  initialOpen?: boolean;
  placement?: Placement;
  offset?: number;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  showArrow?: boolean;
  shouldCloseOnSelect?: boolean;
  width?: number;
}

export function useMenu({
  initialOpen = false,
  placement = 'bottom-start',
  offset: offsetMenu = 0,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  showArrow = true,
  shouldCloseOnSelect = true,
  width,
}: MenuOptions = {}) {
  // if not outside open is passed in
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState<boolean>();

  // to track active index and typeahead
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const arrowRef = React.useRef(null);

  // use either controlled open or uncontrolled (internal)
  const open = controlledOpen ?? uncontrolledOpen ?? initialOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    placement,
    middleware: [
      offset(offsetMenu),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: 5,
      }),
      shift({ padding: 5 }),
      arrow({
        element: arrowRef,
      }),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          // Do things with the data, e.g.
          Object.assign(elements.floating.style, {
            ...(width && { minWidth: `${width}px` }),
            maxWidth: `${availableWidth}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
      }),
      hide({
        strategy: 'referenceHidden',
      }),
    ],
  });
  const { context } = data;
  const elementsRef = React.useRef<Array<HTMLElement | null>>([]);
  const labelsRef = React.useRef<Array<string | null>>([]);

  function handleTypeaheadMatch(index: number | null) {
    if (open) {
      setActiveIndex(index);
    }
  }

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'menu' });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: handleTypeaheadMatch,
  });
  const interactions = useInteractions([
    listNavigation,
    typeahead,
    click,
    dismiss,
    role,
  ]);

  return useMemo(() => {
    return {
      activeIndex,
      arrowRef,
      ...data,
      elementsRef,
      ...interactions,
      labelsRef,
      open,
      setOpen,
      showArrow,
      shouldCloseOnSelect,
      width,
    };
  }, [
    activeIndex,
    arrowRef,
    data,
    elementsRef,
    interactions,
    labelsRef,
    open,
    setOpen,
    showArrow,
    shouldCloseOnSelect,
    width,
  ]);
}

type ContextType = ReturnType<typeof useMenu> | null;

const DropdownContext = React.createContext<ContextType>(null);

export const useMenuContext = () => {
  const context = React.useContext(DropdownContext);

  if (context == null) {
    throw new Error('Menu components must be wrapped in <Menu />');
  }

  return context;
};

export function MenuRoot({
  children,
  shouldCloseOnSelect = true,
  ...restOptions
}: { children: React.ReactNode } & MenuOptions) {
  const dropdownContext = useMenu({
    shouldCloseOnSelect,
    ...restOptions,
  });

  return (
    <DropdownContext.Provider value={dropdownContext}>
      {children}
    </DropdownContext.Provider>
  );
}

interface DropdownTriggerOptions {
  asChild?: boolean;
  children: React.ReactNode;
}

export const DropdownTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & DropdownTriggerOptions
>(function DropdownTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useMenuContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
      }),
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      // The user can style the trigger based on the state
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});

interface ListProps extends React.HTMLProps<HTMLDivElement> {
  arrowClasses?: string;
}

export const List = React.forwardRef<
  HTMLDivElement,
  ListProps & React.HTMLProps<HTMLDivElement>
>(function List({ arrowClasses, style, ...props }, propRef) {
  const {
    arrowRef,
    context: floatingContext,
    elementsRef,
    labelsRef,
    showArrow,
    ...context
  } = useMenuContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  const floatArrowClasses = clsx(styles.list__arrow, arrowClasses);

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
        <MenuList
          ref={ref}
          className={props.className}
          style={{ ...context.floatingStyles, ...style }}
          {...context.getFloatingProps(props)}
        >
          {showArrow && (
            <FloatingArrow
              context={floatingContext}
              ref={arrowRef}
              className={floatArrowClasses}
            />
          )}
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {props.children}
          </FloatingList>
        </MenuList>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});

interface ItemProps extends MenuItemProps {
  label?: string;
}

export const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  { children, disabled, label, onClick, ...props },
  propRef,
) {
  const { activeIndex, shouldCloseOnSelect, setOpen } = useMenuContext();
  const { ref: listItemRef, index } = useListItem({
    label,
  });

  const ref = useMergeRefs([propRef, listItemRef]);

  const isActive = activeIndex === index;

  const handleClick = useCallback(
    (
      e:
        | React.MouseEvent<HTMLElement, MouseEvent>
        | React.KeyboardEvent<HTMLElement>,
    ) => {
      if (!disabled) {
        if (onClick) {
          onClick(e);
        }

        if (shouldCloseOnSelect) {
          setOpen(false);
        }
      }
    },
    [disabled],
  );

  return (
    <MenuItem
      ref={ref}
      isActive={isActive}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick(e);
        }
      }}
      {...props}
    >
      {children}
    </MenuItem>
  );
});

const Dropdown = Object.assign(MenuRoot, {
  Trigger: DropdownTrigger,
  List,
  Item,
});

export default Dropdown;
