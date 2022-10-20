import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../page/Detail';
import Home from '../page/Home';
import Write from '../page/Write';
import { Link } from 'react-router-dom';
import Form from '../component/detail/Form';

const Router = () => {
  return (
    <BrowserRouter>
      <header className="w-[99%] h-14 m-1.5 border-solid border-[1px] rounded-md border-gray-400 ">
        <div className="flex px-10">
          <Link to="/" className="flex-auto py-3 text-xl">
            🏠
          </Link>
          <h1 className="flex-auto text-right text-xl py-3 font-bold">맛집퍼뜩가조</h1>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Form />} />
        {/* path 주소는 대문자 안적음 */}
        <Route path="write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
