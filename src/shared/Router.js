import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../page/Detail';
import Home from '../page/Home';
import Write from '../page/Write';
import { Link } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <header className="w-[99%] h-14 m-1.5 border-solid border-[1px] rounded-md border-gray-400 ">
        <div className="flex px-10">
          <Link to="/" className="flex-auto py-3 text-xl">
            π 
          </Link>
          <h1 className="flex-auto text-right text-xl py-3 font-bold">λ§μ§νΌλ©κ°μ‘°</h1>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        {/* path μ£Όμλ λλ¬Έμ μμ μ */}
        <Route path="write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
