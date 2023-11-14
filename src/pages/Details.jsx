import React, { useState } from 'react';
import Button, { HomeBtn } from 'components/UI/Button';
import styled from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';

const ScDetailsItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ScDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const ScFanLetterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ScWritedTo = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const FanLetterContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  margin-bottom: 10px;

  textarea {
    width: 100%;
    min-height: 100px;
  }
`;

const ScFanLetterBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    background-color: #a10000;
    color: #fff;
  }

  button:first-child {
    margin-right: 10px;
    background-color: #07bb70;
  }
`;

const Details = ({ fanLetters, setFanLetters }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [editInputShown, setEditInputShown] = useState(false);
  const [editInput, setEditInput] = useState('');

  const deleteHandler = (id) => {
    if (window.confirm('정말?')) {
      setFanLetters(fanLetters.filter((item) => item.id !== id));
      navigate('/');
    }
    return;
  };

  const editHandler = () => {
    const selectedFanLetter = fanLetters.find((item) => item.id === id);
    setEditInputShown((editInputShown) => !editInputShown);
    if (!editInputShown) {
      setEditInput(selectedFanLetter.content);
    }

    // 수정 사항이 없으면 alert를 띄우고 함수 종료
    if (
      editInputShown &&
      editInput.trim() === selectedFanLetter.content.trim()
    ) {
      alert('수정할 내용이 없습니다.');
      return;
    }

    if (editInputShown) {
      setFanLetters((prevFanLetters) =>
        prevFanLetters.map((item) =>
          item.id === id ? { ...item, content: editInput } : item
        )
      );
    }
  };

  const editInputHandler = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <div>
      {fanLetters.map((item) => {
        if (item.id === id) {
          return (
            <ScDetailsItems key={item.id}>
              <ScDetailsItem>
                <ScFanLetterInfo>
                  <img src={item.avatar} alt={item.id} />
                  <span>{item.nickname}</span>
                  <span>{item.createdAt}</span>
                </ScFanLetterInfo>
                <ScWritedTo>
                  <div>To : {item.writedTo}</div>
                </ScWritedTo>
                <FanLetterContent>
                  {editInputShown ? (
                    <textarea
                      value={editInput}
                      onChange={editInputHandler}
                    ></textarea>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </FanLetterContent>
                <ScFanLetterBtnGroup>
                  <Button onClick={editHandler}>
                    {editInputShown ? '수정완료' : '수정'}
                  </Button>
                  <Button onClick={() => deleteHandler(item.id)}>삭제</Button>
                </ScFanLetterBtnGroup>
              </ScDetailsItem>
              <HomeBtn onClick={() => navigate('/')}>홈으로</HomeBtn>
            </ScDetailsItems>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Details;
