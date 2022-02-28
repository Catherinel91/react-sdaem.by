import React from 'react';

import styles from './Footer.module.scss';

export default function FooterSocial({ url, type, id, svg }) {
  return (
    <a href={url} key={id} className={styles.socialLink}>
      {svg}
    </a>
  );
}
