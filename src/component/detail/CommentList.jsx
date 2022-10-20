import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { __getComment } from '../../store/modules/comment';
import { useParams } from 'react-router-dom';

function CommnetList() {
  const dispatch = useDispatch();
  const { isLoading, error, comment } = useSelector(state => state.comment);
  const param = useParams();

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  if (isLoading) {
    return <div> 로딩중 ...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(comment);

  const result = comment.filter(jip => {
    return jip.matjipId == Number(param.id);
  });

  console.log(result);

  return (
    <div className="w-full m-auto">
      {result.map(a => (
        <div key={a.id} className="grid grid-cols-4 my-4 bg-white p-3">
          <div className="bg-gray-300 p-4">{a.nickname}</div>
          <div className=" bg-slate-400 mx-3 p-4 col-span-2">{a.memo}</div>
          <div className="grid grid-cols-2">
            <button className=" bg-yellow-300 ">수정</button>
            <button className="bg-stone-500">삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommnetList;
