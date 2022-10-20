import React from 'react';
import { useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="StContainer w-4/5 m-auto">
      <div
        className="StToggleContainer"
        onClick={() => {
          setShow(show => !show);
        }}>
        <button className=" bg-slate-200">{show ? '댓글 내리기' : '댓글보기'}</button>
        {!show ? null : (
          <div className="Daet">
            <CommentInput />
            <CommentList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
