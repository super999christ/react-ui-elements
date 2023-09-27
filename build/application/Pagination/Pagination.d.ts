import React from 'react';
export interface PaginationProps {
    count: number;
    onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
    page?: number;
}
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export default Pagination;
