import React from 'react';
interface MenuListProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const MenuList: React.ForwardRefExoticComponent<Omit<MenuListProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
