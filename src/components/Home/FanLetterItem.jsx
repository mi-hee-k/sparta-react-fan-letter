import React from 'react';
import styled from 'styled-components';

const ScFanLetterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
`;

const ScImgGroup = styled.figure`
  margin-right: 20px;

  img {
    border-radius: 50%;
  }
`;

const ScLetterInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  width: 70%;

  p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`;

const FanLetterItem = ({ item }) => {
  return (
    <ScFanLetterItem>
      <ScImgGroup>
        <img src={`${item.avatar}`} alt={item.nickname} />
      </ScImgGroup>
      <ScLetterInfoGroup>
        <span>{item.nickname}</span>
        <span>{item.createdAt}</span>
        <p>{item.content}</p>
      </ScLetterInfoGroup>
    </ScFanLetterItem>
  );
};

export default FanLetterItem;
