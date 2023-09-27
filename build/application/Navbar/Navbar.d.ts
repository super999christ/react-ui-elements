import type { ComponentProps, ComponentType, ElementType, ReactNode } from 'react';
import React from 'react';
interface NavbarProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    as?: ComponentType | keyof JSX.IntrinsicElements;
    children: React.ReactNode;
}
type GenericComponentProps<T extends ElementType | keyof JSX.IntrinsicElements> = {
    children: ReactNode;
    className?: string;
    tag: T;
} & ComponentProps<T>;
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLOrSVGElement>> & {
    Brand: <T extends ElementType>({ children, className, tag: Tag, ...props }: GenericComponentProps<T>) => import("react/jsx-runtime").JSX.Element;
};
export default Navbar;
