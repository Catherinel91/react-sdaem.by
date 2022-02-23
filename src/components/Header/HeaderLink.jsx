import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Header.module.scss';

export default function HeaderLink({ text, img, link }) {
  return (
    <Link to={link} className={classNames(styles.headerLink, { [styles.hasIcon]: img })}>
      {text}
      {img ? img : ''}
    </Link>
  );
}
