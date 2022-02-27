import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Footer.module.scss';
import Logo from '../../assets/img/logo.png';

import Visa from '../../assets/img/visa-icon.png';
import WebP from '../../assets/img/webpay-icon.png';
import VisaV from '../../assets/img/verified-by-visa.png';
import Mc from '../../assets/img/mastercard-icon.png';
import McS from '../../assets/img/mastercsrd-securecode-icon.png';
import Belkart from '../../assets/img/belkart-icon.png';

import FooterLink from './FooterLink';
import FooterBlockPay from './FooterBlockPay';
import Container from '../Container/Container';
import FooterSocial from './FooterSocial';

import { ReactComponent as Vk } from '../../assets/img/vk-icon.svg';
import { ReactComponent as Ig } from '../../assets/img/instagram-icon.svg';
import { ReactComponent as Fb } from '../../assets/img/fb-icon.svg';

export default function Footer() {
  const payIcons = [Visa, WebP, VisaV, Mc, McS, Belkart];

  const socialIcons = [
    { svg: <Vk />, img: 'vk' },
    { svg: <Ig />, img: 'ig' },
    { svg: <Fb />, img: 'fb' },
  ];

  const [footerLink, setfooterLink] = useState([]);

  useEffect(() => {
    axios.get('/api').then(function ({ data }) {
      setfooterLink(data);
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <div className={styles.footerBlockLogo}>
            <Link to="/" className={styles.logo}>
              <img src={Logo} alt="" />
              <p className={styles.logoText}>Сдаём бай</p>
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: footerLink.copyright }}
              className={styles.footerBlockLogoInfo}></div>
          </div>
          <div className={styles.footerBlockNav}>
            <div className={styles.footerBlockNavTop}>
              {footerLink.linksfooter &&
                footerLink.linksfooter.map((item, i) => (
                  <div key={`list_${i}`} className={styles.footerBlockNavColList}>
                    {item.map((info) => (
                      <FooterLink
                        key={`${info.name}__${info.id}`}
                        text={info.name}
                        bold={info.bold}
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
                  {footerLink.footersocial &&
                    footerLink.footersocial.map((icon, i) => (
                      <FooterSocial
                        key={icon.id}
                        {...icon}
                        svg={socialIcons.filter((el) => el.img === icon.type)[0].svg}
                      />
                    ))}
                </div>
              </div>
              <FooterBlockPay images={payIcons} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
