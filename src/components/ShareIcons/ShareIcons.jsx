import React from 'react';
import styles from './ShareIcons.module.scss';

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';

export default function ShareIcons({ linkIcon, img, svg }) {
  return (
    <>
      {img === 'vk' && <VKShareButton url={linkIcon}>{svg}</VKShareButton>}
      {img === 'fb' && <FacebookShareButton url={linkIcon}>{svg}</FacebookShareButton>}
      {img === 'viber' && <ViberShareButton url={linkIcon}>{svg}</ViberShareButton>}
      {img === 'tg' && <TelegramShareButton url={linkIcon}>{svg}</TelegramShareButton>}
      {img === 'whatsapp' && <WhatsappShareButton url={linkIcon}>{svg}</WhatsappShareButton>}
    </>
  );
}
