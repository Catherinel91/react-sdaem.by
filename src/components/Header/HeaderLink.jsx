import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Header.module.scss';

export default function HeaderLink({ icon, url, name, img, iconleft, iconright }) {
  return (
    <Link
      to={url}
      className={classNames(styles.headerLink, {
        [styles.hasIcon]: icon,
        [styles.iconleft]: iconleft,
        [styles.iconright]: iconright,
      })}>
      {name}
      {img}
    </Link>
  );
}
