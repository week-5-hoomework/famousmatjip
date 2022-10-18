import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import React, { memo } from "react";

function Button() {
  const navigate = useNavigate();
  const [user, setUser] = useState(); //작성자 user, setUser로 나눴습니다.
  const [matjipName, setMatjipName] = useState(); // 맛집이름 matjipName, setmatjipName으로 나눴습니다.
  const [matjipReview, setmatjipReview] = useState(); // 맛집후기 matjipReview, setmatjipReview으로 나눴습니다.

  return (
    <>
      <div>
        <div className="bg-red-300 m-14 p-10">
          <span
            onClick={() => {
              navigate(`/`);
            }}
          >
            이전으로👈
          </span>
          <div className="bg-pink-300">작성자</div>
          <input
            onChange={(e) => {
              setUser(e.target.value);
              console.log(user);
            }}
          ></input>

          <div className="bg-pink-300">맛집이름</div>
          <input
            onChange={(e) => {
              setMatjipName(e.target.value);
              console.log(matjipName);
            }}
          ></input>
          <div className="bg-green-300"></div>
          <select>
            <option value="all">지역선택</option>
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
            <option value="daegu">대구</option>
            <option value="jeju">제주</option>
          </select>
          <div className="errorMessageWrap">맛집후기</div>
          <input
            onChange={(e) => {
              setmatjipReview(e.target.value);
              console.log(matjipReview);
            }}
          ></input>
          <br />
          <span
            onClick={() => {
              navigate(`/`);
            }}
          >
            저장하기👈
          </span>
        </div>
      </div>
    </>
  );
}

export default Button;
// export default memo(Button);
