import React from 'react';
import Button from './Button';
import Backdrop from './Backdrop';
import styled from 'styled-components';

const ScModal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
`;

const ScModalGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  height: 300px;
  border-radius: 10px;
  text-align: center;

  p {
    font-size: 2rem;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
  }

  button {
    width: 40%;
    color: #fff;
  }

  button:nth-child(1) {
    background-color: #b30000;
  }

  button:nth-child(2) {
    background-color: #7c7c7c;
  }
`;

const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onConfirm} />
      <ScModal>
        <ScModalGroup>
          <p>{props.title}</p>
          <div>
            {props.detail && <Button onClick={props.onConfirm}>삭제</Button>}
            {props.detail ? (
              <Button onClick={props.onConfirm}>취소</Button>
            ) : (
              <Button onClick={props.onConfirm}>확인</Button>
            )}
          </div>
        </ScModalGroup>
      </ScModal>
    </>
  );
};

export default Modal;
