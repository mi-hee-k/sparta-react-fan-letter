import React from 'react';
import styled from 'styled-components';

const ScBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Backdrop = ({ onClick }) => {
  return <ScBackDrop onClick={onClick}></ScBackDrop>;
};

export default Backdrop;
