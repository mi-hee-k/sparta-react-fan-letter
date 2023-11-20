import React, { useEffect, useRef, useState } from 'react';
import Button, { HomeBtn } from 'components/UI/Button';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHandler, editHandler } from 'redux/modules/FanLetter';
import ImgGroup from 'components/UI/ImgGroup';

const ScDetailsItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ScDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding: 20px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: #cacaca;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const ScFanLetterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80%;
  background-color: rgba(104, 0, 2, 0.6);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div span {
    width: 70%;
    font-size: 2rem;
    margin-right: 20px;
  }
`;

const ScFanLetterBody = styled.div`
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px;
  width: 80%;
  margin-bottom: 20px;

  span {
    display: inline-block;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #2c0001;
  }

  textarea {
    background-color: transparent;

    width: 100%;
    min-height: 100px;
    resize: none;
  }
`;

const ScFanLetterBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button:first-child {
    margin-right: 10px;
  }

  button:last-child {
    background-color: #a10000;
    color: #fff;
  }
`;

const Details = () => {
  const fanLetters = useSelector((state) => state.FanLetterReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editInputRef = useRef();
  const params = useParams();
  const { id } = params;

  const [editInputShown, setEditInputShown] = useState(false);
  const [editInput, setEditInput] = useState('');

  const delete_Handler = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteHandler(id));
      navigate('/');
    }
    return;
  };

  // 팬레터 수정 함수
  const edit_Handler = () => {
    const selectedFanLetter = fanLetters.find((item) => item.id === id);
    setEditInputShown((editInputShown) => !editInputShown);

    // 수정상태가 아니라면 기존의 content 보여주기
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

    // 수정상태라면 textarea 보여주고 바뀐 content만 update 하기
    if (editInputShown) {
      window.confirm('이대로 수정하시겠습니까?');
      dispatch(editHandler({ id, editInput }));
    }
  };

  // 수정 입력창 변경
  const editInputHandler = (e) => {
    setEditInput(e.target.value);
  };

  // 수정상태일 때 textarea에 포커스
  useEffect(() => {
    if (editInputShown) {
      editInputRef.current.focus();
    }
  }, [editInputShown]);

  return (
    <div>
      {fanLetters.map((item) => {
        if (item.id === id) {
          return (
            <ScDetailsItems key={item.id}>
              <ScDetailsItem>
                <ScFanLetterHeader>
                  <div>
                    <ImgGroup>
                      <img src={item.avatar} alt={item.id} />
                    </ImgGroup>
                    <span>{item.nickname}</span>
                  </div>
                  <span>{item.createdAt}</span>
                </ScFanLetterHeader>
                <ScFanLetterBody>
                  <span>To : {item.writedTo}</span>
                  {editInputShown ? (
                    <textarea
                      ref={editInputRef}
                      value={editInput}
                      onChange={editInputHandler}
                    />
                  ) : (
                    <textarea disabled defaultValue={item.content} />
                  )}
                </ScFanLetterBody>
                <ScFanLetterBtnGroup>
                  <Button onClick={edit_Handler}>
                    {editInputShown ? '수정완료' : '수정'}
                  </Button>
                  <Button onClick={() => delete_Handler(id)}>삭제</Button>
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
