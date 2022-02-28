import React from 'react';

import styles from './NewsCards.module.scss';

import { Link, useLocation } from 'react-router-dom';

export default function NewsCard({ url, img, title, text, date }) {
  return (
    <div className={styles.card}>
      <Link to={`/news${url}`} className={styles.imgLink}>
        <img className={styles.img} src={img} alt="" />
      </Link>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.contentBottom}>
          <span className={styles.date}>{date}</span>
          <Link to={`/news${url}`} className={styles.contentLink}>
            Читать
          </Link>
        </div>
      </div>
    </div>
  );
}
