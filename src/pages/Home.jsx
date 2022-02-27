import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';

import Container from '../components/Container/Container';

export default function Home() {
  const itemsLink = [
    {
      id: 0,
      text: 'Главная',
      url: '/',
    },
  ];

  return (
    <>
      <div className="main">
        <Container>
          <BreadCrumbs itemsLink={itemsLink} />
          <div>Home</div>
        </Container>
      </div>
    </>
  );
}
