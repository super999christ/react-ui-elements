import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef } from 'react';

import Button from '../../Button';
import { usePagination } from '../../utils/usePagination';
import PaginationItem from './PaginationItem';

export interface PaginationProps {
  count: number;
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  page?: number;
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination(props, ref) {
    const { count, onChange, page: initialPage } = props;

    const { items } = usePagination({
      count,
      onChange,
      page: initialPage,
    });

    return (
      <div className="flex w-full items-center gap-[2px]" ref={ref}>
        {items.map(({ type, page, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <PaginationItem {...item} selected={selected}>
                {page}
              </PaginationItem>
            );
          } else {
            children = (
              <Button
                className={type === 'previous' ? 'mr-2' : 'ml-2'}
                variant="link-gray"
                size="sm"
                {...(item as any)}
                prefixIcon={
                  type === 'previous' ? (
                    <FontAwesomeIcon icon={faArrowLeft} />
                  ) : null
                }
                suffixIcon={
                  type === 'next' ? (
                    <FontAwesomeIcon icon={faArrowRight} />
                  ) : null
                }
              >
                {`${type.charAt(0).toUpperCase()}${type.slice(1, type.length)}`}
              </Button>
            );
          }

          return (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`list-none ${
                // eslint-disable-next-line no-nested-ternary
                type === 'previous'
                  ? 'mr-auto'
                  : type === 'next'
                  ? 'ml-auto'
                  : ''
              }`}
            >
              {children}
            </li>
          );
        })}
      </div>
    );
  },
);

export default Pagination;
