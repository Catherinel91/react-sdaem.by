import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { ReactComponent as MapSvg } from '../../assets/img/map-icon.svg';
import { ReactComponent as HeartSvg } from '../../assets/img/heart-icon.svg';
import HeaderLink from './HeaderLink';

export default function HeaderTop({ items }) {
  return (
    <div className={styles.headerTop}>
      <div className="container">
        <div className={styles.headerTopInner}>
          <div className={styles.headerNav}>
            {items.length > 0 &&
              items.map((item, i) => (
                <HeaderLink
                  key={`${item}_${item.id}`}
                  text={item.name}
                  link={item.url}
                  img={
                    item.icon && (
                      <MapSvg className={styles.headerMapSvg} width="8px" height="10px" />
                    )
                  }>
                  {item.name}
                </HeaderLink>
              ))}
          </div>
          <div className={styles.headerTopTools}>
            <Link to="/" className={styles.headerTopLink}>
              <div className={styles.headerTopMark}>
                Закладки
                <HeartSvg />
              </div>
            </Link>
            <Link to="/" className={styles.headerTopLink + ` ${styles.headerTopLinkAuth}`}>
              Вход и регистрация
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
