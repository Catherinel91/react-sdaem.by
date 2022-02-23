import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function HeaderDrop() {
  return (
    <div className={styles.headerBottomDrop}>
      <ul className={styles.headerBottomDropUl}>
        <Link className={styles.headerBottomDropLi} to="/">
          Квартиры на сутки в Минске
        </Link>

        <Link className={styles.headerBottomDropLi} to="/">
          Квартиры на сутки в Гомеле
        </Link>

        <Link className={styles.headerBottomDropLi} to="/">
          Квартиры на сутки в Бресте
        </Link>

        <Link className={styles.headerBottomDropLi} to="/">
          Квартиры на сутки в Витебске
        </Link>

        <Link className={styles.headerBottomDropLi} to="/">
          Квартиры на сутки в Гродно
        </Link>

        <Link className={styles.headerBottomDropLi} to="/">
          Квартиры на сутки в Могилеве
        </Link>
      </ul>
    </div>
  );
}
