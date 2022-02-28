import React from 'react';

import styles from './Footer.module.scss';

export default function FooterBlockPay({ images }) {
  return (
    <div className={styles.footerBlockPay}>
      {images.map((image, i) => (
        <img key={`pay_${i}`} src={image} alt="" className={styles.footerBlockPayImg} />
      ))}
    </div>
  );
}
