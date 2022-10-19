import React from "react";
import Layout from "../components/Home/Layout";
import Header from "../components/Home/Header";
import Nav from "../components/Home/Nav";
import List from "../components/Home/List";

function Home() {
  return (
    <Layout>
      <Header />
      <Nav />
      <List />
    </Layout>
  );
}

export default Home;
