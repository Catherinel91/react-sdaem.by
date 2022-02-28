import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Header.module.scss';
import { ReactComponent as MapSvg } from '../../assets/img/map-icon.svg';
import { ReactComponent as HeartSvg } from '../../assets/img/heart-icon.svg';
import HeaderLink from './HeaderLink';
import Container from '../Container/Container';

export default function HeaderTop({ items }) {
  return (
    <div className={styles.headerTop}>
      <Container>
        <div className={styles.headerTopInner}>
          <div className={styles.headerNav}>
            {items &&
              items.map((item, i) => (
                <HeaderLink
                  key={`${item.id}`}
                  {...item}
                  img={
                    item.icon && (
                      <MapSvg className={styles.headerMapSvg} width="8px" height="10px" />
                    )
                  }></HeaderLink>
              ))}
          </div>
          <div className={styles.headerTopTools}>
            <Link to="/" className={styles.headerTopLink}>
              <div className={styles.headerTopMark}>
                Закладки
                <HeartSvg />
              </div>
            </Link>
            <Link to="/" className={classNames(styles.headerTopLink, styles.headerTopLinkAuth)}>
              Вход и регистрация
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
