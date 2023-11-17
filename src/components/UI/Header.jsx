import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderGroup = styled.header`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 400px;
`;

const ScTitleGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(43, 9, 9, 0.6);
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  height: 50%;
  text-align: center;

  p {
    color: #c2c2c2;
  }
`;

const ScTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Header = () => {
  return (
    <HeaderGroup>
      <ScTitleGroup>
        <Link to={'/'}>
          <ScTitle>주술회전 팬레터 컬렉션</ScTitle>
          <p>
            &#44;&#44; <br /> 살아가는 방식때문에
            <br /> 후회하고 싶진 않아 <br /> &#44;&#44;
          </p>
        </Link>
      </ScTitleGroup>
    </HeaderGroup>
  );
};

export default Header;
