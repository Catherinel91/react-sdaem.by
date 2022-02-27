import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';
import { ReactComponent as MapSvg } from '../../assets/img/map-icon.svg';
import Logo from '../../assets/img/logo.png';

import BtnAdd from '../BtnAdd/BtnAdd';
import HeaderDrop from './HeaderDrop';
import HeaderLink from './HeaderLink';
import Container from '../Container/Container';

export default function HeaderBottom({ items, menuDrop }) {
  const location = useLocation();

  return (
    <div className={styles.headerBottom}>
      <Container>
        <div className={styles.headerBottomInner}>
          <nav className={styles.headerNav}>
            {location.pathname === '/' ? (
              <a className={styles.logo}>
                <img src={Logo} alt="" />
              </a>
            ) : (
              <Link to="/" className={styles.logo}>
                <img src={Logo} alt="" />
              </Link>
            )}
            <ul className={styles.headerBottomList}>
              {items &&
                items.map((item) => (
                  <li key={item.id} className={styles.headerBottomListItem}>
                    <HeaderLink
                      {...item}
                      img={item.icon && <MapSvg className={styles.headerMapSvg} />}
                    />
                    {item.menu && <HeaderDrop menuDrop={menuDrop} />}
                  </li>
                ))}
            </ul>
          </nav>
          <BtnAdd text={'+ Разместить объявление'} />
        </div>
      </Container>
    </div>
  );
}
