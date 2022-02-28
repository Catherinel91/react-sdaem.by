import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderBottom from './HeaderBottom';

import HeaderTop from './HeaderTop';

export default function Header() {
  const [linkHeader, setLinkHeader] = useState([]);

  useEffect(() => {
    axios.get('/api').then(function ({ data }) {
      setLinkHeader(data);
    });
  }, []);

  return (
    <header className="header">
      <HeaderTop items={linkHeader.linksTop} />
      <HeaderBottom items={linkHeader.linksBottom} menuDrop={linkHeader.linksDrop} />
    </header>
  );
}
