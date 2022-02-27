import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../index';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
