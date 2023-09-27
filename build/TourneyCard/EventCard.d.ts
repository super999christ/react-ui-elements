import * as React from 'react';
interface EventCardProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    onClick?: () => void;
}
interface EventCardImageProps extends React.HTMLProps<HTMLDivElement> {
    image: string | React.ReactNode;
}
interface EventCardContentProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}
interface EventCardFooterProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    borderColorClass?: string;
}
export declare const EventCard: React.ForwardRefExoticComponent<Omit<EventCardProps, "ref"> & React.RefAttributes<HTMLDivElement>> & {
    Image: React.ForwardRefExoticComponent<Omit<EventCardImageProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<Omit<EventCardContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<Omit<EventCardFooterProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
    PlayerCount: ({ children, count, }: {
        children?: React.ReactNode;
        count?: number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    PlayerProfileImages: ({ images }: {
        images: string[];
    }) => import("react/jsx-runtime").JSX.Element;
};
export {};
