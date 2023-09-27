import type { Placement } from "@floating-ui/react";
import React from "react";
export interface TooltipOptions {
    initialOpen?: boolean;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare function useTooltip({ initialOpen, placement, open: controlledOpen, onOpenChange: setControlledOpen, }?: TooltipOptions): {
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
    getReferenceProps: (userProps?: React.HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    open: boolean;
    setOpen: (open: boolean) => void;
};
export declare const useTooltipContext: () => {
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
    getReferenceProps: (userProps?: React.HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    open: boolean;
    setOpen: (open: boolean) => void;
};
export declare function TooltipRoot({ children, ...options }: {
    children: React.ReactNode;
} & TooltipOptions): import("react/jsx-runtime").JSX.Element;
export declare const TooltipTrigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & {
    asChild?: boolean | undefined;
}, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const TooltipContent: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Tooltip: typeof TooltipRoot & {
    Trigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & {
        asChild?: boolean | undefined;
    }, "ref"> & React.RefAttributes<HTMLElement>>;
    Content: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export default Tooltip;
