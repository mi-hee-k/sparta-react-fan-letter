import React from 'react';
import styled from 'styled-components';
import Button from 'components/UI/Button';

const TabGroup = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;

const Tab = ({ clickHandler, selectedMember }) => {
  return (
    <TabGroup>
      <Button onClick={clickHandler} $active={selectedMember === '전체'}>
        전체
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '카리나'}>
        카리나
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '윈터'}>
        윈터
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '닝닝'}>
        닝닝
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '지젤'}>
        지젤
      </Button>
    </TabGroup>
  );
};

export default Tab;
