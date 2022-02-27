import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function HeaderDrop({ menuDrop }) {
  return (
    <div className={styles.headerBottomDrop}>
      <ul className={styles.headerBottomDropList}>
        {menuDrop.length > 0 &&
          menuDrop.map((item) => (
            <li key={item.id} className={styles.headerBottomDropItem}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
