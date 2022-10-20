import React from 'react';

function CommnetList() {
  return (
    <div className="grid grid-col-3 w-11/12 m-auto">
      <div className="w-3/4 m-auto bg-white">
        <div>Nickname</div>
        <div className=" bg-slate-400">댓글내용</div>
        <div className=" bg-yellow-300">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default CommnetList;
