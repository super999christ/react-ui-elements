import type { RefObject } from 'react';
interface UseCollapsibleNavProps {
    containerRef: RefObject<HTMLElement>;
}
/**
 * Use resize observer to calculate what elements are visible and what hidden based on items and container positions/sizes.
 *
 * TODO: Currently observer only works if item is not hidden completly so DOMRECT can be calculated properly. Improve it.
 */
export declare const useCollapseNav: ({ containerRef }: UseCollapsibleNavProps) => {
    hidden: string[];
    registerItem: (el: Element | null, id: string, position: number) => void;
    ready: boolean;
};
export {};
