import React from 'react';
export interface ModalOptions {
    initialOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare function useModal({ initialOpen, open: controlledOpen, onOpenChange: setControlledOpen, }?: ModalOptions): {
    labelId: string | undefined;
    descriptionId: string | undefined;
    setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
    placement: import("@floating-ui/utils").Placement;
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
        placement: import("@floating-ui/utils").Placement;
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
export declare const useModalContext: () => {
    labelId: string | undefined;
    descriptionId: string | undefined;
    setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
    placement: import("@floating-ui/utils").Placement;
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
        placement: import("@floating-ui/utils").Placement;
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
} & {
    setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
};
export declare function ModalRoot({ children, ...options }: {
    children: React.ReactNode;
} & ModalOptions): import("react/jsx-runtime").JSX.Element;
interface ModalTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}
export declare const ModalTrigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & ModalTriggerProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface ModalContentProps {
    overlayClassName?: string;
}
export declare const ModalContent: React.ForwardRefExoticComponent<Omit<ModalContentProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const ModalHeading: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const ModalDescription: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export declare const ModalClose: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const Modal: typeof ModalRoot & {
    ModalContent: React.ForwardRefExoticComponent<Omit<ModalContentProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ModalHeading: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    ModalClose: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
    ModalDescription: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    ModalTrigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & ModalTriggerProps, "ref"> & React.RefAttributes<HTMLElement>>;
};
export default Modal;
