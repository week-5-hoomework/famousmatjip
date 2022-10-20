import React, { useEffect } from 'react';
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

  return (
    <div className="w-full m-auto">
      {result?.map(a => (
        <CommentDetail a={a} key={a.id} />
      ))}
    </div>
  );
}

export default CommentList;
