import React from 'react';

function CommentInput() {
  return (
    <div className="w-[100%] m-auto">
      <form className="relative">
        <input type="text" placeholder="작성자" className="w-[40%] mr-3 p-2" />

        <input type="text" placeholder="댓글내용" className="w-[40%] mr-3 p-2" />
        <button onClick={e => e.preventDefault()} className="absolute top-0 right-4 bg-white p-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default CommentInput;
