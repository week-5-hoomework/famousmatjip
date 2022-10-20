import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { __postComment } from '../../store/modules/comment';
import { useParams } from 'react-router-dom';

function CommentInput() {
  const nicknameRef = useRef({});
  const memoRef = useRef({});
  const param = useParams();
  console.log(param);

  const dispatch = useDispatch(); //디스패치 생성 1번

  // useEffect(() => {
  //   dispatch(__postComment()); //디스패치라는 함수를 사용 2번 디스패치애 postcomment Thunk함수를 담아 리듀서에 보낸다.  3번
  // }, []);

  return (
    <div className="w-[100%] m-auto">
      <form className="relative">
        <input ref={nicknameRef} type="text" placeholder="작성자" className="w-[40%] mr-3 p-2" />

        <input type="text" placeholder="댓글내용" className="w-[40%] mr-3 p-2" />
        <button onClick={e => e.preventDefault()} className="absolute top-0 right-4 bg-white p-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default CommentInput;
