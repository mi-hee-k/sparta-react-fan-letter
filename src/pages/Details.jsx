import React, { useState } from 'react';
import Button, { HomeBtn } from 'components/UI/Button';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHandler, editHandler } from 'redux/modules/FanLetter';
import ImgGroup from 'components/UI/ImgGroup';
import Modal from 'components/UI/Modal';

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
  background-color: #eee;
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
  padding: 10px;
  margin-bottom: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div span {
    width: 50%;
    font-size: 2rem;
    margin-right: 20px;
  }
`;

const ScFanLetterBody = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  margin-bottom: 20px;

  span {
    display: inline-block;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
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

  button {
    background-color: #a10000;
    color: #fff;
  }

  button:first-child {
    margin-right: 10px;
    background-color: #07bb70;
  }
`;

const Details = () => {
  const fanLetters = useSelector((state) => state.FanLetterReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [editInputShown, setEditInputShown] = useState(false);
  const [editInput, setEditInput] = useState('');
  const [error, setError] = useState();

  const delete_Handler = (id) => {
    // setError({
    //   title: '정말 삭제하시겠습니까?',
    //   detail: true,
    // });
    console.log(id);
    if (window.confirm('정말?')) {
      dispatch(deleteHandler(id));
      navigate('/');
    }
    return;
  };

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
      dispatch(editHandler({ id, editInput }));
    }
  };

  const editInputHandler = (e) => {
    setEditInput(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {fanLetters.map((item) => {
        if (item.id === id) {
          return (
            <ScDetailsItems key={item.id}>
              {error && (
                <Modal
                  title={error.title}
                  detail={error.detail}
                  onConfirm={errorHandler}
                />
              )}
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
                    <textarea value={editInput} onChange={editInputHandler} />
                  ) : (
                    <textarea disabled defaultValue={item.content}></textarea>
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
