import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BtnAdd.module.scss';

export default function BtnAdd() {
  return (
    <Link to="/" className={styles.BtnAdd}>
      + Разместить объявление
    </Link>
  );
}
