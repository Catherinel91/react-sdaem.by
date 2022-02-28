import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './NewsBlockDetail.module.scss';

import BreadCrumbs from '../../BreadCrumbs/BreadCrumbs';
import Container from '../../Container/Container';
import Loader from '../../Loader/Loader';
import NewsCard from '../NewsCard';
import ShareIcons from '../../ShareIcons/ShareIcons';

import { ReactComponent as Vk } from '../../../assets/img/vk-icon.svg';
import { ReactComponent as Fb } from '../../../assets/img/facebook-icon.svg';
import { ReactComponent as Viber } from '../../../assets/img/viber-icon.svg';
import { ReactComponent as Tg } from '../../../assets/img/telegram-icon.svg';
import { ReactComponent as Whatsapp } from '../../../assets/img/whatsapp-icon.svg';

export default function NewsBlockDetail() {
  const [loading, setLoading] = useState(false);
  const [newsDetailCard, setNewsDetailCard] = useState([]);
  const [shareIcon, setshareIcon] = useState([]);
  const [recomendationCards, setrecomendationCards] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/newsDetailCards').then(function ({ data }) {
      setNewsDetailCard(data.cards);
      setrecomendationCards(data.recomendations);
      setshareIcon(data.shareIcons);
      setLoading(false);
    });
  }, []);

  const itemsLink = [
    {
      id: 0,
      text: 'Новости',
      url: `/news`,
    },
    {
      id: 1,
      text: `${newsDetailCard.title}`,
      url: `/news${newsDetailCard.url}`,
    },
  ];

  const socialIcons = [
    { svg: <Vk width="35px" height="35px" />, img: 'vk' },
    { svg: <Fb width="35px" height="35px" />, img: 'fb' },
    { svg: <Viber width="35px" height="35px" />, img: 'viber' },
    { svg: <Tg width="35px" height="35px" />, img: 'tg' },
    { svg: <Whatsapp width="35px" height="35px" />, img: 'whatsapp' },
  ];

  const linkIcon = window.location.href;

  return (
    <div className={styles.newsDetail}>
      <div className={styles.newsDetailMain}>
        <Container>
          <div className={styles.wrapper}>
            <BreadCrumbs itemsLink={itemsLink} />
            {loading ? (
              <Loader />
            ) : (
              <div className={styles.inner}>
                <h1 className="h1">{newsDetailCard.title}</h1>
                <div className={styles.head}>
                  <span className={styles.date}>{newsDetailCard.date}</span>
                  <div className={styles.share}>
                    <span className={styles.shareText}>Поделиться</span>
                    <div className={styles.shareIcons}>
                      {shareIcon.length > 0 &&
                        shareIcon.map((icon, i) => (
                          <ShareIcons
                            key={icon.id}
                            {...icon}
                            linkIcon={linkIcon}
                            img={icon.type}
                            svg={socialIcons.filter((el) => el.img === icon.type)[0].svg}
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <div className={styles.image}>
                  <img src={newsDetailCard.img} alt="" className={styles.img} />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: newsDetailCard.text }}
                  className={styles.text}></div>
              </div>
            )}
          </div>
        </Container>
      </div>
      {recomendationCards.length > 0 && (
        <div className={styles.recomendations}>
          <Container>
            <div className={styles.recomendationsInner}>
              <h2 className="h2">Читайте также</h2>
              {loading ? (
                <Loader />
              ) : (
                <div className={styles.recomendationsCards}>
                  {recomendationCards.length > 0 &&
                    recomendationCards.map((card) => <NewsCard key={card.id} {...card} />)}
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
