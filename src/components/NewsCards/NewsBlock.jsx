import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './NewsCards.module.scss';

import NewsCard from './NewsCard';
import Pagination from '../Pagination/Pagination';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Search from '../Search/Search';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';

export default function NewsBlock() {
  const itemsLink = [
    {
      id: 0,
      text: 'Новости',
      url: '/news',
    },
  ];

  const [newsCard, setNewsCard] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [newsPerPage] = useState(9);

  function setNewsList() {
    setLoading(true);
    axios.get('/api').then(function ({ data }) {
      setNewsCard(data.newsCards);
      setLoading(false);
    });
  }

  useEffect(() => {
    setNewsList();
  }, []);

  useEffect(() => {
    if (search === '' && !newsCard.length) {
      setNewsList();
    }
  }, [search]);

  let setSearchPosts = () => {
    setLoading(true);
    axios.get('/api').then(({ data }) => {
      if (search === '') {
        setNewsCard(data.newsCards);
      } else {
        setNewsCard(
          [...data.newsCards].filter((card) =>
            card.title.toLowerCase().includes(search.toLowerCase()),
          ),
        );
      }
      setLoading(false);
    });
  };

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = newsCard.slice(firstNewsIndex, lastNewsIndex);

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return (
    <div className={styles.news}>
      <Container>
        <BreadCrumbs itemsLink={itemsLink} />
        <div className={styles.newsInner}>
          <div className={styles.blockTitle}>
            <h2 className="h2">Новости</h2>
            <Search
              onSubmit={(e) => {
                e.preventDefault();
                setSearchPosts();
              }}
              val={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              cards={currentNews}
              setSelectCards={setNewsCard}
              initLoad={setLoading}
            />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className={styles.newsBlock}>
              <div className={styles.newsBlockInner}>
                {currentNews.length > 0 ? (
                  currentNews.map((item) => <NewsCard key={item.id} {...item} />)
                ) : (
                  <div className={styles.noNews}>Новости не найдены...</div>
                )}
              </div>
              <Pagination
                paginate={paginate}
                newsPerPage={newsPerPage}
                totalNews={newsCard.length}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
