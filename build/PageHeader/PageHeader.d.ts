import React from 'react';
type PageHeaderVariantTypes = 'simple' | 'avatar' | 'banner-simple' | 'banner-avatar' | 'banner-simple-centered' | 'banner-avatar-centered';
export interface PageHeaderProps extends React.HTMLProps<HTMLDivElement> {
    Avatar?: () => React.ReactNode;
    BackButton?: () => React.ReactNode;
    background?: string;
    Breadcrumb?: () => React.ReactNode;
    children: React.ReactNode;
    MobileAvatar?: () => React.ReactNode;
    supportingText?: string;
    text: string;
    variant: PageHeaderVariantTypes;
}
declare const PageHeader: React.ForwardRefExoticComponent<Omit<PageHeaderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default PageHeader;
