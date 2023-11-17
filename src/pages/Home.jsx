import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddFanLetter from 'components/Home/AddFanLetter';
import FanLetterList from 'components/Home/FanLetterList';
import Tab from 'components/Home/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { addHandler } from 'redux/modules/FanLetter';
import { selectedHandler } from 'redux/modules/SelectedMember';
import Button from 'components/UI/Button';
import styled from 'styled-components';

const ScExpandGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #fff;
    border: 3px dashed #000;
    margin-bottom: 30px;
    font-size: 1.5rem;
    width: 30%;
  }
`;

const Home = () => {
  // const fanLetters = useSelector((state) => state.FanLetterReducer);
  const selectedMember = useSelector((state) => state.SelectedMemberReducer);

  const dispatch = useDispatch();

  const [expand, setExpand] = useState(true);

  const [inputs, setInputs] = useState({
    nickname: '',
    content: '',
    writedTo: '',
  });

  const inputChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [memberClick, setMemberClick] = useState({
    전체: false,
    카리나: false,
    윈터: false,
    닝닝: false,
    지젤: false,
  });

  const [error, setError] = useState();

  const formattedDate = (currentDate) => {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(currentDate);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputs.nickname.length === 0 || inputs.content.length === 0) {
      setError({
        title: '닉네임과 내용을 입력해주세요',
        detail: false,
      });
      // alert('닉네임과 내용을 입력해주세요');
      return;
    }
    if (inputs.writedTo === '' || inputs.writedTo === '전체') {
      setError({
        title: '멤버를 선택해주세요',
        detail: false,
      });
      // alert('멤버를 선택해주세요');
      return;
    }

    const currentDate = new Date();
    const newFanLetter = {
      createdAt: formattedDate(currentDate),
      nickname: inputs.nickname,
      avatar:
        'https://global.discourse-cdn.com/turtlehead/optimized/2X/c/c830d1dee245de3c851f0f88b6c57c83c69f3ace_2_250x250.png',
      content: inputs.content,
      writedTo: inputs.writedTo,
      id: uuidv4(),
    };

    dispatch(addHandler(newFanLetter));
    setInputs({
      nickname: '',
      content: '',
    });
  };

  const clickHandler = (e) => {
    dispatch(selectedHandler(e.target.innerHTML));
    setInputs({
      ...inputs,
      writedTo: e.target.innerHTML,
    });
    setMemberClick({
      ...memberClick,
      [selectedMember]: true,
    });
  };

  const expandToggler = () => {
    setExpand((expand) => !expand);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <main>
      {/* 멤버별 팬레터 보기 */}
      <Tab clickHandler={clickHandler} selectedMember={selectedMember} />
      {/* 팬레터 등록 */}

      <AddFanLetter
        inputs={inputs}
        submitHandler={submitHandler}
        inputChangeHandler={inputChangeHandler}
        error={error}
        errorHandler={errorHandler}
      />
      <ScExpandGroup>
        <Button onClick={expandToggler}>📣 りょういき てんきあ --- !!! </Button>
      </ScExpandGroup>
      {/* 팬레터 */}
      {expand && <FanLetterList />}
    </main>
  );
};

export default Home;
