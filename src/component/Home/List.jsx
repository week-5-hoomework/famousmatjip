import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __deleteOne, __getOne } from '../../store/modules/matjip';

const List = ({ where }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, matjip } = useSelector(state => state.matjip);

  useEffect(() => {
    dispatch(__getOne());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onClickDeleteButtonHandler = number => {
    dispatch(__deleteOne(number));
  };

  const newMatjip = matjip.filter(house => (where === `default` ? true : where === house.location));
  return (
    <div className="max-w-[1200px] m-auto pb-10">
      <div className="grid grid-cols-3 w-11/12 m-auto gap-y-10 gap-x-6">
        {newMatjip.map(house => (
          <div className="relative bg-gray-300 h-80 max-w-[300px] py-8 rounded-[20px]" key={house.id}>
            <button
              className="absolute top-1 right-2 text-right p-2"
              onClick={() => onClickDeleteButtonHandler(house.id)}>
              ❌
            </button>
            <div className="text-center m-auto bg-red-200 w-[80px] h-[40px] py-2 rounded-full hover:bg-red-400">
              <h3 className="">{house.location}</h3>
            </div>
            <p
              className="text-center w-10/12 m-auto py-3 hover:cursor-pointer"
              onClick={() => {
                navigate(`/detail/${house.id}`);
              }}>
              {house.title}
            </p>
            <div
              className="w-10/12 m-auto h-40 p-2 bg-white hover:cursor-pointer"
              onClick={() => {
                navigate(`/detail/${house.id}`);
              }}>
              {house.content}
            </div>
            <div className="absolute bottom-4 left-6 text-xs ">작성자 : {house.user}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* {matjip.map((house) => {
  if (where == "default") {
    return (
      <div
        className="relative bg-gray-300 h-80 max-w-[300px] py-8 rounded-[20px]"
        key={house.id}
      >
        <button
          className="absolute top-1 right-2 text-right p-2"
          onClick={() => onClickDeleteButtonHandler(house.id)}
        >
          ❌
        </button>
        <div className="text-center m-auto bg-red-200 w-[80px] h-[40px] py-2 rounded-full hover:bg-red-400">
          <h3 className="">{house.location}</h3>
        </div>
        <p
          className="text-center w-10/12 m-auto py-3 hover:cursor-pointer"
          onClick={() => {
            navigate(`/detail/${house.id}`);
          }}
        >
          {house.title}
        </p>
        <div
          className="w-10/12 m-auto h-40 p-2 bg-white hover:cursor-pointer"
          onClick={() => {
            navigate(`/detail/${house.id}`);
          }}
        >
          {house.content}
        </div>
        <div className="absolute bottom-4 left-6 text-xs ">
          작성자 : {house.user}
        </div>
      </div>
    );
  }
  if (house.location == where) {
    return (
      <div
        className="relative bg-gray-300 h-80 max-w-[300px] py-8 rounded-[20px]"
        key={house.id}
      >
        <button
          className="absolute top-1 right-2 text-right p-2"
          onClick={() => onClickDeleteButtonHandler(house.id)}
        >
          ❌
        </button>
        <div className="text-center m-auto bg-red-200 w-[80px] h-[40px] py-2 rounded-full hover:bg-red-400">
          <h3 className="">{house.location}</h3>
        </div>
        <p
          className="text-center w-10/12 m-auto py-3 hover:cursor-pointer"
          onClick={() => {
            navigate(`/detail/${house.id}`);
          }}
        >
          {house.title}
        </p>
        <div
          className="w-10/12 m-auto h-40 p-2 bg-white hover:cursor-pointer"
          onClick={() => {
            navigate(`/detail/${house.id}`);
          }}
        >
          {house.content}
        </div>
        <div className="absolute bottom-4 left-6 text-xs ">
          작성자 : {house.user}
        </div>
      </div>
    );
  }
  return;
})} */

export default List;

/* 
    {
      "id": 1,
      "user": "진영",
      "location": "부산",
      "title": "수영 할매국밥",
      "content": "여가 진또배이 로컬 맛집"
    },
    {
      "id": 2,
      "user": "경태",
      "location": "경기도",
      "title": "갱기도맛집",
      "content": "오소 오소 갱기도로 오소"
    },
    {
      "id": 3,
      "user": "하은",
      "location": "대구",
      "title": "수성못 맛집",
      "content": "여기를 오려고 대구 온다 아니야?"
    },
    {
      "id": 4,
      "user": "상현",
      "location": "서울",
      "title": "공덕동 굴다리",
      "content": "여기는 진짜 로컬 맛집 아님"
    },
    {
      "id": 5,
      "user": "상순",
      "location": "부산",
      "title": "해운대 암소갈비",
      "content": "여기는 진짜 로컬 맛집..!"
    },
    {
      "id": 6,
      "user": "맛김",
      "location": "서울",
      "title": "모란역 근처 맛집",
      "content": "모란이와 함께하는 저녁~"
    },
    {
      "id": 7,
      "user": "연수",
      "location": "인천",
      "title": "송도 맛집",
      "content": "여기를 안와봤다면 송도 왔다 말하지마라"
    },
    {
      "id": 8,
      "user": "승훈",
      "location": "부천",
      "title": "인천 아닌 부천 맛집",
      "content": "여기를 안와봤다면 부천 왔다 말하지마라"
    },
    {
      "id": 9,
      "user": "모란",
      "location": "서울",
      "title": "멍멍ㅁ어어멍멈ㅁ엉",
      "content": "멍멍멈엉엄엉"
    }
*/
