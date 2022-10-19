import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ setWhere }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setWhere(e.target.value);
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="text-center my-16 text-7xl">맛집 퍼뜩</div>
      <div className="text-center my-10">다른 사람의 맛집 구경하러 가기</div>
      <div className="w-4/5 columns -2 m-auto text-center my-8">
        <select
          //   multiple 쓰면 다중 선택 가능
          name="location"
          id="location"
          className=" bg-lime-300 w-[100px] mr-20 p-3 px-5 appearance-none hover:cursor-pointer rounded-[10px]"
          onChange={handleChange}
        >
          <option value="default">
            {/*serWhere 기본값으로 씀*/}
            전국 &nbsp;&nbsp; ⮟
          </option>
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
          <option value="제주">제주</option>
          {/* optgruop 을 쓰면 카테고리도 가능 */}
        </select>
        <button
          className=" bg-emerald-300 w-20 ml-20 p-3 rounded-[10px]"
          onClick={() => {
            navigate("/write");
          }}
        >
          New
        </button>
      </div>
    </div>
  );
};

export default Nav;
