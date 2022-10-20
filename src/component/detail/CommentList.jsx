import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { __getComment, __deleteComment } from '../../store/modules/comment';
import { useParams } from 'react-router-dom';

function CommnetList() {
  const dispatch = useDispatch();
  const { isLoading, error, comment } = useSelector(state => state.comment);
  const param = useParams();
  //상현이가 만듬
  const onDelete = id => {
    dispatch(__deleteComment(id));
  }; //preventDefaul는 폼있때만 보통 쓴다

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

  // function del() {
  //   if (window.confirm('삭제 하시겠습니까?')) {
  //     fetch(`http://localhost:3000/detail/1/${user.id}`, {
  //       method: 'DELETE',
  //     });
  //   }
  // }

  return (
    <div className="w-full m-auto">
      {result.map(a => (
        <div key={a.id} className="grid grid-cols-4 my-4 bg-white p-3">
          <div className="bg-gray-300 p-4">{a.nickname}</div>
          <div className=" bg-slate-400 mx-3 p-4 col-span-2">{a.memo}</div>
          <div className="grid grid-cols-2">
            <button className=" bg-yellow-300 ">수정</button>
            <button type="button" onClick={() => onDelete(a.id)} className="bg-stone-500">
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommnetList;
