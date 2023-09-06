import clsx from 'clsx';
import type {
  ComponentProps,
  ComponentType,
  ElementType,
  ReactNode,
} from 'react';
import React from 'react';

import styles from './Navbar.module.css';

interface NavbarProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: ComponentType | keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const NavbarRoot = React.forwardRef<HTMLOrSVGElement, NavbarProps>(
  function Navbar(props, propsRef) {
    const { as: Element = 'nav', className, ...rest } = props;

    const RenderElement = Element as any;
    const navbarClasses = clsx(styles.nav, className);

    return (
      <RenderElement className={navbarClasses} ref={propsRef} {...rest}>
        <div className={styles.nav__container}>{props.children}</div>
      </RenderElement>
    );
  },
);

type GenericComponentProps<
  T extends ElementType | keyof JSX.IntrinsicElements,
> = {
  children: ReactNode;
  className?: string;
  tag: T;
} & ComponentProps<T>;

const Brand = <T extends ElementType>({
  children,
  className,
  tag: Tag = 'span',
  ...props
}: GenericComponentProps<T>) => {
  const brandClasses = clsx(styles.brand, className);

  return (
    <Tag {...props} className={brandClasses}>
      {children}
    </Tag>
  );
};

/* const Brand = React.forwardRef<HTMLOrSVGElement, BrandProps>(function Brand(
  props,
  propRef
) {
  const { as: Element = 'span', className, ...rest } = props;

  const RenderElement = Element as any;
  const brandClasses = clsx(styles['brand'], className);

  return (
    <RenderElement className={brandClasses} ref={propRef} {...rest}>
      {props.children}
    </RenderElement>
  );
}); */

const Navbar = Object.assign(NavbarRoot, { Brand });

export default Navbar;
