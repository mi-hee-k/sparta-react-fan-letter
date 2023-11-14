import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddFanLetter from 'components/Home/AddFanLetter';
import FanLetterList from 'components/Home/FanLetterList';
import Tab from 'components/Home/Tab';

// 팬레터 카드

const Home = ({ fanLetters, setFanLetters }) => {
  const [inputs, setInputs] = useState({
    nickname: '',
    content: '',
    writedTo: '',
  });

  const [memberClick, setMemberClick] = useState({
    전체: false,
    카리나: false,
    윈터: false,
    닝닝: false,
    지젤: false,
  });

  const [selectedMember, setSelectedMember] = useState('전체');

  const inputChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputs.nickname.length === 0 || inputs.content.length === 0) {
      alert('닉네임과 내용을 입력해주세요');
      return;
    }

    const newFanLetter = {
      createdAt: new Date().toISOString(),
      nickname: inputs.nickname,
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg',
      content: inputs.content,
      writedTo: inputs.writedTo,
      id: uuidv4(),
    };
    setFanLetters([...fanLetters, newFanLetter]);
    setInputs({
      nickname: '',
      content: '',
      writedTo: '',
    });
  };

  const clickHandler = (e) => {
    setSelectedMember(e.target.innerHTML);
    setMemberClick({
      ...memberClick,
      [selectedMember]: true,
    });
  };

  return (
    <div>
      <main>
        {/* 멤버별 팬레터 보기 */}
        <Tab clickHandler={clickHandler} selectedMember={selectedMember} />
        {/* 팬레터 등록 */}
        <AddFanLetter
          inputs={inputs}
          submitHandler={submitHandler}
          inputChangeHandler={inputChangeHandler}
        />
        {/* 팬레터 */}
        <FanLetterList
          fanLetters={fanLetters}
          selectedMember={selectedMember}
        />
      </main>
    </div>
  );
};

export default Home;
