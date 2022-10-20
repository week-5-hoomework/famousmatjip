import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { __getComment, __editComment, __deleteComment } from '../../store/modules/comment';

function CommentDetail({ a }) {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [nick, setNic] = useState(a.nickname);
  const [editMemo, setEditMemo] = useState(a.memo);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const cancelHandler = () => {
    setIsEdit(false);
  };

  const updateHandler = () => {
    if (isEdit) {
      const data = { ...a, nickname: nick, memo: editMemo };
      dispatch(__editComment(data));
    }
    setIsEdit(!isEdit);
  };

  //상현이가 만듬
  const onDelete = id => {
    dispatch(__deleteComment(id));
  }; //preventDefaul는 폼있때만 보통 쓴다

  console.log(a);

  return (
    <div className="w-full m-auto">
      <div className="my-4 bg-white p-3 rounded-lg border-2 border-gray-200">
        {isEdit ? (
          <div className="grid grid-cols-4 ">
            <input
              className="bg-gray-300 p-4"
              value={nick}
              onChange={event => {
                setNic(event.target.value);
              }}
            />
            <input
              className=" bg-slate-400 mx-3 p-4 col-span-2"
              value={editMemo}
              onChange={event => {
                setEditMemo(event.target.value);
              }}
            />
            <div className="grid grid-cols-2">
              <button className=" bg-yellow-300 " onClick={() => cancelHandler()}>
                취소
              </button>
              <button className="bg-stone-500" onClick={() => updateHandler()}>
                저장
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 ">
            <div className="bg-gray-300 p-4">{a.nickname}</div>
            <div className=" bg-slate-400 mx-3 p-4 col-span-2">{a.memo}</div>
            <div className="grid grid-cols-2">
              <button className=" bg-yellow-300 " onClick={() => editHandler()}>
                수정
              </button>
              <button className="bg-stone-500" onClick={() => onDelete(a.id)}>
                삭제
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentDetail;
