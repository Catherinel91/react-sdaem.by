import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { ReactComponent as MapSvg } from '../../assets/img/map-icon.svg';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import BtnAdd from '../BtnAdd/BtnAdd';
import HeaderDrop from './HeaderDrop';
import HeaderLink from './HeaderLink';

export default function HeaderBottom({ items }) {
  return (
    <div className={styles.headerBottom}>
      <div className="container">
        <div className={styles.headerBottomInner}>
          <nav className={styles.headerNav}>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>
            <ul className={styles.headerBottomUl}>
              {items.length &&
                items.map((item) => (
                  <li key={`${item}_${item.id}`} className={styles.headerBottomLi}>
                    <HeaderLink
                      text={item.name}
                      link={item.url}
                      img={item.icon && <MapSvg className={styles.headerMapSvg} />}
                    />
                    {item.menu && <HeaderDrop />}
                  </li>
                ))}
            </ul>
          </nav>
          <BtnAdd />
        </div>
      </div>
    </div>
  );
}
