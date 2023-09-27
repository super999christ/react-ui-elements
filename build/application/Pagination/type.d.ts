/// <reference types="react" />
type PaginationType = 'end-ellipsis' | 'first' | 'last' | 'next' | 'page' | 'previous' | 'start-ellipsis';
export interface PaginationItem {
    page: React.ReactNode;
    type: PaginationType;
    selected: boolean;
}
export {};
