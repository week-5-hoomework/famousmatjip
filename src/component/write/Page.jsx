// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios import 합니다.
import { useDispatch, useSelector } from 'react-redux';
import { __getCounter } from '../../store/modules/counterSlice';
import { __postCounter } from '../../store/modules/counterSlice';
import { Navigate } from 'react-router-dom';
import { useRef } from 'react';

const Page = () => {
  const dispatch = useDispatch();
  const { number, isLoading } = useSelector(state => state.counter);
  console.log(number, isLoading);
  const [title, setTitle] = useState(''); //키값 벨류로 객체로 묶어라
  const [content, setContent] = useState(''); //인풋과 셀렉트값을 유즈스테이트에 담아준다
  const [location, setLocation] = useState('default');
  const [user, setUser] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault(); //기본적인 이벤트 있는거 없애기

    console.log(user);

    if (user.trim() === '' || title.trim() === '' || content.trim() === '' || location === 'default')
      return alert('빈칸없이 채워주세요~');

    const data = {
      user: user,
      location: location,
      title: title,
      content: content,
    };

    dispatch(__postCounter(data)); //넘어오는값
  };

  useEffect(() => {
    dispatch(__getCounter());
  }, [dispatch]); //[]디팬던시
  //api실패 안됨
  //getcount는 정상
  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {/* { user.trim() === '' || title.trim() === '' || content.trim() === '' || location === 'default'
      ? alert('빈칸없이 채워주세요~')
      : (
        `머냐고 젠장`
      );
      } */}
        <br />
        <input
          className="bg-gray-100 m-0 p-10"
          type="text"
          // ref={contentRef}
          placeholder="작성자"
          // value={user}
          onChange={ev => {
            const { value } = ev.target;
            setUser(value);
          }}
        />
        <br />
        <input
          className="bg-gray-100 m-0 p-10"
          type="text"
          // ref={userRef}
          placeholder="맛집이름"
          // value={title}
          onChange={ev => {
            const { value } = ev.target;
            setTitle(value);
          }}
        />
        <br />
        <input
          className="bg-gray-100 m-0 p-10"
          type="text"
          // ref={titleRef}
          placeholder="내용작성"
          // value={content}
          onChange={ev => {
            const { value } = ev.target;
            setContent(value);
          }}
        />
        <br />
        <select
          // value={location}
          onChange={ev => {
            const { value } = ev.target;
            setLocation(value);
          }}>
          <option value="default">지역선택</option>
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
          <option value="제주">제주</option>
        </select>
        <button className="bg-gray-300">저장하기🌝</button>
      </form>
    </>
  );
};

export default Page;
