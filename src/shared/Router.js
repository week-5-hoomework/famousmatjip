import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../page/Detail";
import Home from "../page/Home";
import Write from "../page/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        {/* path 주소는 대문자 안적음 */}
        <Route path="write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
