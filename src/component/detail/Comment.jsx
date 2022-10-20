import React from 'react';
import { useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = props => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-green-400">
      <div className="bg-yellow-100 w-4/5 m-auto py-4">
        <div className="w-1/3 m-auto p-4">
          <button
            className="bg-slate-200 w-[100%]"
            onClick={() => {
              setShow(show => !show);
            }}>
            {show ? '댓글닫기' : '댓글보기'}
          </button>
        </div>
        {!show ? null : (
          <div className="w-4/5 m-auto">
            <CommentInput />
            <CommentList></CommentList>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
