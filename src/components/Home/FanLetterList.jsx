import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FanLetterItem from './FanLetterItem';
import { useSelector } from 'react-redux';

const ScFanLetterItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: rgba(44, 0, 1, 0.9);
  border-radius: 10px;
  max-width: 60%;
  margin: 0 auto;
  text-align: center;

  p {
    color: #fff;
    font-weight: bold;
  }
`;

const FanLetterList = () => {
  const fanLetters = useSelector((state) => state.FanLetterReducer);
  const selectedMember = useSelector((state) => state.SelectedMemberReducer);
  const filteredLetters = fanLetters.filter((item) =>
    selectedMember !== '전체' ? item.writedTo === selectedMember : true
  );
  return (
    <ScFanLetterItems>
      {filteredLetters && filteredLetters.length > 0 ? (
        filteredLetters.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <FanLetterItem item={item} />
          </Link>
        ))
      ) : (
        <p>'팬레터가 없습니다'</p>
      )}
    </ScFanLetterItems>
  );
};

export default FanLetterList;
