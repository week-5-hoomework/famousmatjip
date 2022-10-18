import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const Form = props => {
  const [matjip, setMatjip] = useState(null);

  const fetchMatjip = async () => {
    const { data } = await axios.get('http://localhost:3001/matjip');
    setMatjip(data);
  };

  useEffect(() => {
    fetchMatjip();
  }, []);

  return (
    <div>
      <div className="bg-red-300 m-14 p-10">
        <div>이전으로</div>
        <div className="bg-pink-300">작성자</div>
        <input></input>
        <div className="bg-pink-300">맛집이름</div>
        <input></input>
        <div>지역이름</div>
        <div className="bg-green-300">맛집후기</div>
        <input></input>
        {props.children}
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          댓글
        </button>
      </div>
    </div>
  );
};

export default Form;
