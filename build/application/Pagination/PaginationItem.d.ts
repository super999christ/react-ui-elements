import React from 'react';
interface PaginationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    selected?: boolean;
}
declare const PaginationItem: React.ForwardRefExoticComponent<PaginationItemProps & React.RefAttributes<HTMLButtonElement>>;
export default PaginationItem;
