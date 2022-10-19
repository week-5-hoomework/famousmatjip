// src/App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.
import { useDispatch, useSelector } from "react-redux";
import { __getCounter } from "../../store/modules/counterSlice";
import { __postCounter } from "../../store/modules/counterSlice";
import { Navigate } from "react-router-dom";

const Page = () => {
  const dispatch = useDispatch();
  const { number, isLoading } = useSelector((state) => state.counter);
  console.log(number, isLoading);

  const onChangeHandler = (evnet) => {
    const { value } = evnet.target;
    // setNumber(+value);
  };
  const onClickAddNumberHandler = () => {
    //청크불러온것 //청크하나 추가될때마다 그 3개가 늘어난다
  };

  //
  // 새롭게 생성하는 todo를 관리하는 state
  const [todo, setTodo] = useState({
    title: "",
  });

  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/matjip");
    setTodos(data);
  };

  const onSubmitHandler = (todo) => {
    dispatch(__postCounter(todo));
  };

  const onClickDeleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/matjip/${todoId}`);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <input
          className="bg-gray-100 m-0 p-10"
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button className="bg-gray-300">작성자</button>
      </form>
      <select>
        <option value="all">지역선택</option>
        <option value="seoul">서울</option>
        <option value="busan">부산</option>
        <option value="daegu">대구</option>
        <option value="jeju">제주</option>
      </select>
      <div>
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
      </div>
    </>
  );
};

export default Page;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { __postOne } from "./redux/modules/board";

// function Page() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onSubmitHandler = (todo) => {
//     dispatch(__postOne(todo));
//   };
//   const [pageTodo, setPageTodo] = useState({
//     location: "",
//     title: "",
//     content: "",
//   });

//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSubmitHandler(todo);
//         }}
//       >
//         <div>
//           <div className="bg-red-300 m-14 p-10">
//             <span
//               onSubmit={() => {
//                 navigate(`/`);
//               }}
//             >
//               이전으로👈
//             </span>
//             <div className="bg-pink-300">작성자✋</div>
//             <input
//               onChange={(e) => {
//                 setUser(e.target.value);
//                 console.log(user);
//               }}
//             ></input>

//             <div className="bg-pink-300">맛집이름✋</div>
//             <input
//               onChange={(e) => {
//                 setMatjipName(e.target.value);
//                 console.log(matjipName);
//               }}
//             ></input>
//             <div className="bg-green-300"></div>
//             <select>
//               <option value="all">지역선택</option>
//               <option value="seoul">서울</option>
//               <option value="busan">부산</option>
//               <option value="daegu">대구</option>
//               <option value="jeju">제주</option>
//             </select>
//             <div className="errorMessageWrap text-align: start">맛집후기</div>
//             <textarea
//               rows="5"
//               cols="33"
//               onChange={(e) => {
//                 setmatjipReview(e.target.value);
//                 console.log(matjipReview);
//               }}
//             ></textarea>
//             <br />
//             <span
//               onClick={() => {
//                 navigate(`/`);
//               }}
//             >
//               저장하기👈
//             </span>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Page;
// // export default memo(Button);
