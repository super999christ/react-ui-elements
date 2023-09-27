import type { Placement } from '@floating-ui/react';
import React from 'react';
import type { MenuItemProps } from './MenuItem';
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
export declare function useMenu({ initialOpen, placement, offset: offsetMenu, onOpenChange: setControlledOpen, open: controlledOpen, showArrow, shouldCloseOnSelect, width, }?: MenuOptions): {
    labelsRef: React.MutableRefObject<(string | null)[]>;
    open: boolean;
    setOpen: (open: boolean) => void;
    showArrow: boolean;
    shouldCloseOnSelect: boolean;
    width: number | undefined;
    getReferenceProps: (userProps?: React.HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    elementsRef: React.MutableRefObject<(HTMLElement | null)[]>;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: React.MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        x: number;
        y: number;
        update: () => void;
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event | undefined) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    activeIndex: number | null;
    arrowRef: React.MutableRefObject<null>;
};
export declare const useMenuContext: () => {
    labelsRef: React.MutableRefObject<(string | null)[]>;
    open: boolean;
    setOpen: (open: boolean) => void;
    showArrow: boolean;
    shouldCloseOnSelect: boolean;
    width: number | undefined;
    getReferenceProps: (userProps?: React.HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    elementsRef: React.MutableRefObject<(HTMLElement | null)[]>;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: React.MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        x: number;
        y: number;
        update: () => void;
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event | undefined) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    activeIndex: number | null;
    arrowRef: React.MutableRefObject<null>;
};
export declare function MenuRoot({ children, shouldCloseOnSelect, ...restOptions }: {
    children: React.ReactNode;
} & MenuOptions): import("react/jsx-runtime").JSX.Element;
interface DropdownTriggerOptions {
    asChild?: boolean;
    children: React.ReactNode;
}
export declare const DropdownTrigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & DropdownTriggerOptions, "ref"> & React.RefAttributes<HTMLElement>>;
interface ListProps extends React.HTMLProps<HTMLDivElement> {
    arrowClasses?: string;
}
export declare const List: React.ForwardRefExoticComponent<Omit<ListProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface ItemProps extends MenuItemProps {
    label?: string;
}
export declare const Item: React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLElement>>;
declare const Dropdown: typeof MenuRoot & {
    Trigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & DropdownTriggerOptions, "ref"> & React.RefAttributes<HTMLElement>>;
    List: React.ForwardRefExoticComponent<Omit<ListProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLElement>>;
};
export default Dropdown;
