import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { __getmatjip, __patchMatjips } from '../../store/modules/matjip';
import Button from '../Button';

const Form = props => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState('');
  const togglelIsEdit = () => {
    if (isEdit) {
      const data = { ...result[0], content: text };
      dispatch(__patchMatjips(data));
      console.log(data);
    }
    setIsEdit(!isEdit);
  };

  const { isLoading, error, matjip } = useSelector(state => state.matjip);
  useEffect(() => {
    //effect 구문에 생성한 함수를 넣어서 실행합니다.
    dispatch(__getmatjip());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const result = matjip.filter(jip => {
    return jip.id === Number(param.id);
  });

  return (
    <div>
      <div className="bg-red-300 m-14 p-10">
        <div
          onClick={() => {
            navigate(`/`); //이전으로 실행해 주는 뭔가가 있었던거 같은데 알아보기
          }}>
          이전으로
        </div>
        {isEdit ? (
          <div>
            <div className="bg-pink-300">작성자</div>
            <span> {result[0].user}</span>

            <div className="bg-pink-300">맛집이름</div>
            <span> {result[0].title}</span>

            <span>{result[0].location}</span>

            <div className="bg-green-300">맛집후기</div>
            <input
              defaultValue={result[0].content}
              onChange={e => {
                console.log(e.target.value);
                setText(e.target.value);
              }}
            />
          </div>
        ) : (
          <div>
            <div className="bg-pink-300">작성자</div>
            <span> {result[0].user}</span>

            <div className="bg-pink-300">맛집이름</div>
            <span> {result[0].title}</span>

            <span>{result[0].location}</span>

            <div className="bg-green-300">맛집후기</div>
            <span> {result[0].content}</span>
          </div>
        )}
        <Button onClick={togglelIsEdit}>{!isEdit ? '수정하기' : '저장하기'}</Button>
      </div>
      {props.children}
    </div>
  );
};

export default Form;
