import React from 'react';
interface NavbarItemProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    active?: boolean;
}
export declare const NavbarItem: React.ForwardRefExoticComponent<Omit<NavbarItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
