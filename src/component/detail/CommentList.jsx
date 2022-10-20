import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { __getComment, __editComment, __deleteComment } from '../../store/modules/comment';
import { useParams } from 'react-router-dom';
import CommentDetail from './CommentDetail';

function CommentList() {
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
      {result?.map(a => (
        <CommentDetail a={a} key={a.id} />
      ))}
    </div>
  );
}

export default CommentList;
