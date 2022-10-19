import React from 'react';
import { useState } from 'react';
import Form from '../detail/Form';
import Button from '../Button';
import { __patchMatjips } from '../../store/modules/matjip';

function List(props) {
  const [좋아요, 아주좋아요] = useState(0);

  const [isEdit, setIsEdit] = useState(false);
  const togglelIsEdit = () => setIsEdit(!isEdit);

  return (
    <div>
      {props.children}
      <Form>
        <div>
          <span
            onClick={() => {
              아주좋아요(좋아요 + 1);
            }}>
            😆
          </span>
          {좋아요}
        </div>
      </Form>
      <Button onClick={togglelIsEdit}>버튼1</Button>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 ">
        댓글
      </button>
    </div>
  );
}

export default List;
