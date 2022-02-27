import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './Pagination.module.scss';

export default function Pagination({ newsPerPage, totalNews, paginate }) {
  // const itemsToShow = [1, 2, 3, 4, 5, 6, 7, '...', 11];
  const itemsToShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activeItem, setActiveItem] = useState(0);

  const initActiveItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className={styles.pagination}>
      {pageNumbers.map((page, i) => (
        <a
          key={`${i}`}
          onClick={(e) => {
            e.preventDefault();
            paginate(page);
            initActiveItem(i);
          }}
          className={classNames(styles.page, {
            [styles.active]: activeItem === i,
            // [styles.inactive]: i === 7,
          })}
          href=" ">
          {page}
        </a>
      ))}
    </div>
  );
}
