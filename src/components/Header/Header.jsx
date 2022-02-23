import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderBottom from './HeaderBottom';

import HeaderTop from './HeaderTop';

export default function Header() {
  const [linkTop, setLinkTop] = useState([]);
  const [linkBottom, setLinkBottom] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(function ({ data }) {
      setLinkTop(data.linksTop);
      setLinkBottom(data.linksBottom);
    });
  }, []);

  return (
    <header className="header">
      <HeaderTop items={linkTop} />
      <HeaderBottom items={linkBottom} />
    </header>
  );
}
