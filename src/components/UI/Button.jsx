import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #eeb20c;
  border: none;
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  ${(props) =>
    props.$active &&
    `
      background-color: #015aff;
      color: #fff;
    `}
`;

const HomeBtn = styled(Btn)`
  display: block;
  margin: 0 auto;
`;

const Button = ({ children, onClick, $active }) => {
  return (
    <Btn onClick={onClick} $active={$active}>
      {children}
    </Btn>
  );
};

export { Btn, HomeBtn };
export default Button;
