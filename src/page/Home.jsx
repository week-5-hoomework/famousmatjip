import React from 'react';
import Layout from '../component/Home/Layout';
import Header from '../component/Home/Header';
import Nav from '../component/Home/Nav';
import List from '../component/Home/List';
import { useState } from 'react';

function Home() {
  const [where, setWhere] = useState('default');

  return (
    <Layout>
      <Header />
      <Nav setWhere={setWhere} />
      <List where={where} />
    </Layout>
  );
}

export default Home;
