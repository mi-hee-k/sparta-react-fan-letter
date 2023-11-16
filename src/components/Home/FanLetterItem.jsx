import ImgGroup from 'components/UI/ImgGroup';
import React from 'react';
import styled from 'styled-components';

const ScFanLetterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #424242;
  background-color: #eee;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(102%);
  }
`;

// const ScImgGroup = styled.figure`
//   margin-right: 20px;

//   img {
//     width: 128px;
//     height: 128px;
//     border-radius: 50%;
//   }
// `;

const ScLetterInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  width: 70%;

  span:nth-child(2) {
    margin-bottom: 20px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`;

const FanLetterItem = ({ item }) => {
  return (
    <ScFanLetterItem>
      <ImgGroup>
        <img src={`${item.avatar}`} alt={item.nickname} />
      </ImgGroup>
      <ScLetterInfoGroup>
        <span>{item.nickname}</span>
        <span>{item.createdAt}</span>
        <span>To : {item.writedTo}</span>
        <p>{item.content}</p>
      </ScLetterInfoGroup>
    </ScFanLetterItem>
  );
};

export default FanLetterItem;
