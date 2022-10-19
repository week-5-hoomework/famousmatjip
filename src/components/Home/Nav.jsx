import React from "react";
import { useNavigate } from "react-router-dom";

export const locationValue = (value) => {
  return console.log("lV내부콘솔", value);
};

export const whereValue = locationValue();

const Nav = () => {
  const navigate = useNavigate();

  // const locationValue = (value) => {
  //   return console.log(value);
  // };

  const handleChange = (e) => {
    locationValue(e.target.value);
  };

  console.log("whereValue 확인", whereValue);

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
            {/* defaultValue 속성 지우거나 selected 같은 것 찾아보기 */}
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
