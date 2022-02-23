import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as Vk } from '../../assets/img/vk-icon.svg';
import { ReactComponent as Ig } from '../../assets/img/instagram-icon.svg';
import { ReactComponent as Fb } from '../../assets/img/fb-icon.svg';

import Visa from '../../assets/img/visa-icon.png';
import WebP from '../../assets/img/webpay-icon.png';
import VisaV from '../../assets/img/verified-by-visa.png';
import Mc from '../../assets/img/mastercard-icon.png';
import McS from '../../assets/img/mastercsrd-securecode-icon.png';
import Belkart from '../../assets/img/belkart-icon.png';
import FooterLink from './FooterLink';

export default function Footer() {
  const [footerLink, setfooterLink] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(function ({ data }) {
      setfooterLink(data.linksfooter);
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerBlockLogo}>
            <Link to="/" className={styles.logo}>
              <Logo />
              <p className={styles.logoText}>Сдаём бай</p>
            </Link>
            <div className={styles.footerBlockLogoInfo}>
              <p>ИП Шушкевич Андрей Викторович</p>
              <p>УНП 192602485 Минским горисполкомом</p>
              <p>10.02.2016</p>
              <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
              <p>+375 29 621 48 33, sdaem@sdaem.by</p>
              <p>Режим работы: 08:00-22:00</p>
            </div>
          </div>
          <div className={styles.footerBlockNav}>
            <div className={styles.footerBlockNavTop}>
              {footerLink.map((item, i) => (
                <div key={`list_${i}`} className={styles.footerBlockNavColList}>
                  {item.map((info) => (
                    <FooterLink
                      key={`${info.name}_${info.id}_`}
                      text={info.name}
                      title={info.title}
                      link={info.url}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.footerBlockNavBottom}>
              <div className={styles.footerBlockSocial}>
                <span className={styles.footerBlockSocialTitle}>Мы в соцсетях</span>
                <div className={styles.blockSocialIcons}>
                  <a href="#" className={styles.socialLink}>
                    <Ig />
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <Vk />
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <Fb />
                  </a>
                </div>
              </div>
              <div className={styles.footerBlockPay}>
                <img src={Visa} alt="" className={styles.footerBlockPayImg} />
                <img src={WebP} alt="" className={styles.footerBlockPayImg} />
                <img src={VisaV} alt="" className={styles.footerBlockPayImg} />
                <img src={Mc} alt="" className={styles.footerBlockPayImg} />
                <img src={McS} alt="" className={styles.footerBlockPayImg} />
                <img src={Belkart} alt="" className={styles.footerBlockPayImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
