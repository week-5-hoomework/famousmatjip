import React from 'react';

function CommentInput() {
  return (
    <div>
      <form>
        <input type="text" placeholder="작성자" />

        <input type="text" placeholder="댓글내용" />
        <button>Save</button>
      </form>
    </div>
  );
}

export default CommentInput;
