import React from "react";
import Layout from "../components/Home/Layout";
import Header from "../components/Home/Header";
import Nav from "../components/Home/Nav";
import List from "../components/Home/List";
import { useState } from "react";

function Home() {
  const [where, setWhere] = useState("default");

  return (
    <Layout>
      <Header />
      <Nav setWhere={setWhere} />
      <List where={where} />
    </Layout>
  );
}

export default Home;
