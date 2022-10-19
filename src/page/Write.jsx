import React from "react";
import Layout from "../component/write/Layout";
import Navbar from "../component/write/Navbar";
import Page from "../component/write/Page";
import counterSlice from "../store/modules/counterSlice";

function Write() {
  return (
    <Layout>
      <Navbar />
      <Page />
    </Layout>
  );
}

export default Write;
