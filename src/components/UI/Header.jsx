import React from 'react';
import styled from 'styled-components';

const HeaderGroup = styled.header`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: red;
  margin-bottom: 20px;
`;

const Header = () => {
  return (
    <HeaderGroup>
      <Title>에스파 팬레터 콜렉션</Title>
    </HeaderGroup>
  );
};

export default Header;
