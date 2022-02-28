import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Footer.module.scss';

export default function FooterLink({ text, link, bold, id }) {
  return (
    <Link to={link} className={bold ? styles.title : styles.navLink}>
      {text}
    </Link>
  );
}
