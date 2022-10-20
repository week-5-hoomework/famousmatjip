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
  const [title, setTitle] = useState(); //키값 벨류로 객체로 묶어라
  const [content, setContent] = useState(); //인풋과 셀렉트값을 유즈스테이트에 담아준다
  const [location, setLocation] = useState();
  const [user, setUser] = useState();
  const onSubmitHandler = e => {
    e.preventDefault(); //기본적인 이벤트 있는거 없애기
    const data = {
      user: user,
      location: location,
      title: title,
      content: content,
    };
    console.log(data);
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
  // console.log(user);
  // if (user.trim() === '' || title.trim() === '' || content.trim() === '') return alert('빈칸없이 채워주세요~');

  //const data = {
  //title:title,
  //content:contet:
  //location:location
  //}
  // const onChangeHandler = evnet => {
  //   const { value } = evnet.target;
  //   // setNumber(+value);
  // };
  // const onClickAddNumberHandler = () => {
  //   //청크불러온것 //청크하나 추가될때마다 그 3개가 늘어난다
  // };

  //
  // 새롭게 생성하는 todo를 관리하는 state
  // const [todo, setTodo] = useState({
  //   title: "",
  // });

  // const [todos, setTodos] = useState(null);

  // const fetchTodos = async () => {
  //   const { data } = await axios.get("http://localhost:3001/matjip");
  //   setTodos(data);
  // };

  // const onClickDeleteButtonHandler = (todoId) => {
  //   axios.delete(`http://localhost:3001/matjip/${todoId}`);
  // };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <br />
        <input
          className="bg-gray-100 m-0 p-10"
          type="text"
          // ref={contentRef}
          placeholder="작성자"
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
          onChange={ev => {
            const { value } = ev.target;
            setContent(value);
          }}
        />
        <br />
        <select
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
        {/* <div>
        {number.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            <button
              className="bg-green-100 m-0 p-10"
              type="button"
              onClick={() => onClickDeleteButtonHandler(todo.id)}
            >
              삭제하기
            </button>
            <input type="number" onChange={onChangeHandler} />
            <button onClick={onClickAddNumberHandler}>더하기</button>
          </div>
        ))}
      </div> */}
        <button className="bg-gray-300">저장하기🌝</button>
      </form>
    </>
  );
};

export default Page;
