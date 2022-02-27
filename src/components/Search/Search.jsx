import React from 'react';

import styles from './Search.module.scss';

import { ReactComponent as SerchIcon } from '../../assets/img/search-icon.svg';

export default function Search({ val, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit} className={styles.searchForm} action="">
      <label className={styles.label}>
        <input
          value={val}
          onChange={onChange}
          placeholder="Поиск по статьям"
          type="text"
          className={styles.input}
        />
      </label>
      <button className={styles.btn} type="submit">
        <SerchIcon className={styles.searchIcon} />
      </button>
    </form>
  );
}
