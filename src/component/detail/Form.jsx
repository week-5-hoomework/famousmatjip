import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { __getmatjip, __getOne, __patchMatjips } from '../../store/modules/matjip';
import Button from '../Button';

const Form = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [좋아요, 아주좋아요] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(1);
    dispatch(__getOne());
  }, [dispatch]);

  const togglelIsEdit = () => {
    if (isEdit) {
      const data = { ...result, content: text };
      dispatch(__patchMatjips(data));
      console.log(result);
    }
    setIsEdit(!isEdit);
  };

  const data = useSelector(state => state.matjip);
  console.log(data);

  if (data.isLoading) {
    return <div>로딩 중....</div>;
  }

  if (data.error) {
    return <div>{data.error.message}</div>;
  }

  const [result] = data.matjip?.filter(jip => {
    return jip.id == Number(param.id);
  });

  console.log(result);

  return (
    <div className=" w-4/5 m-auto">
      <div className="bg-red-300 m-14 p-10">
        <div
          onClick={() => {
            navigate(`/`); //이전으로 실행해 주는 뭔가가 있었던거 같은데 알아보기
          }}>
          이전으로
        </div>
        {isEdit ? (
          <div>
            <div className="bg-pink-300 p-4 m-4">
              작성자
              <span> {result.user}</span>
            </div>

            <div className="bg-pink-300 p-4 m-4">
              맛집이름
              <span> {result.title}</span>
            </div>

            <div className=" p-4 m-4">{result.location}</div>

            <div className="bg-green-300">맛집후기</div>
            <input
              defaultValue={result.content}
              onChange={e => {
                console.log(e.target.value);
                setText(e.target.value);
              }}
            />
          </div>
        ) : (
          <div>
            <div className="bg-pink-300">작성자</div>
            <span> {result?.user}</span>

            <div className="bg-pink-300">맛집이름</div>
            <span> {result?.title}</span>

            <span>{result?.location}</span>

            <div className="bg-green-300">맛집후기</div>
            <span> {result?.content}</span>

            <div>
              <span
                onClick={() => {
                  아주좋아요(좋아요 + 1);
                }}>
                😆
              </span>
              {좋아요}
            </div>
          </div>
        )}
        <Button onClick={togglelIsEdit}>{!isEdit ? '수정하기' : '저장하기'}</Button>
      </div>
    </div>
  );
};

export default Form;
