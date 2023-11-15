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
  background-color: #eee;
  max-width: 50%;
  margin: 0 auto;
`;

const FanLetterList = () => {
  const fanLetters = useSelector((state) => state.FanLetterReducer);
  const selectedMember = useSelector((state) => state.SelectedMemberReducer);
  const filteredLetters = fanLetters.filter((item) =>
    selectedMember !== '전체' ? item.writedTo === selectedMember : true
  );
  return (
    <ScFanLetterItems>
      {filteredLetters && filteredLetters.length > 0
        ? filteredLetters.map((item) => (
            <Link to={`/details/${item.id}`} key={item.id}>
              <FanLetterItem item={item} />
            </Link>
          ))
        : '팬레터가 없습니다'}
    </ScFanLetterItems>
  );
};

export default FanLetterList;
