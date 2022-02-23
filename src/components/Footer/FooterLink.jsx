import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Footer.module.scss';

export default function FooterLink({ text, link, title }) {
  return (
    <Link to={link} className={title ? styles.title : styles.navLink}>
      {text}
    </Link>
  );
}
