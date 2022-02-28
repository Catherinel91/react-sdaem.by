import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from '../Container/Container';

import styles from './BreadCrumbs.module.scss';

import { ReactComponent as BreadVrumbsIcon } from '../../assets/img/breadcrumbs-icon.svg';

export default function BreadCrumbs({ itemsLink }) {
  const location = useLocation();

  return (
    <>
      <div className={styles.breadCrumbs}>
        <Container>
          <div className={styles.inner}>
            <Link to="/" className={styles.link}>
              <BreadVrumbsIcon className={styles.icon} />
            </Link>
            {location.pathname !== '/' && (
              <ul className={styles.list}>
                {itemsLink.length &&
                  itemsLink.map((link) => (
                    <li key={`${link.id}_${link.text}`} className={styles.item}>
                      {location.pathname === link.url ? (
                        <span className={styles.link}>{link.text}</span>
                      ) : (
                        <Link to={link.url} className={styles.link}>
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
