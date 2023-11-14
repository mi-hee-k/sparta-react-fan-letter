import React from 'react';
import styled from 'styled-components';
import Button from 'components/UI/Button';

const ScFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 50%;
  margin: 0 auto;
`;

const ScForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #636363;
  padding: 20px;
  margin-bottom: 20px;

  button {
    background-color: #eeb20c;
    font-weight: bold;
  }
`;

const ScInputGroup = styled.div`
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }
`;

const AddFanLetter = ({ inputs, submitHandler, inputChangeHandler }) => {
  return (
    <ScFormGroup>
      <ScForm onSubmit={submitHandler}>
        <ScInputGroup>
          <label htmlFor='nickname'>닉네임</label>
          <input
            type='text'
            placeholder='최대 20글자까지 작성할 수 있습니다'
            maxLength={20}
            name='nickname'
            value={inputs.nickname}
            onChange={inputChangeHandler}
          />
        </ScInputGroup>
        <ScInputGroup>
          <label htmlFor='content'>내용</label>
          <input
            type='text'
            placeholder='최대 100글자까지만 작성할 수 있습니다'
            maxLength={100}
            name='content'
            value={inputs.content}
            onChange={inputChangeHandler}
          />
        </ScInputGroup>
        <ScInputGroup>
          <label htmlFor='writedTo'>누구에게 팬레터를 보낼까요?</label>
          <select
            name='writedTo'
            id='writedTo'
            value={inputs.writedTo}
            onChange={inputChangeHandler}
          >
            <option value='카리나'>카리나</option>
            <option value='윈터'>윈터</option>
            <option value='닝닝'>닝닝</option>
            <option value='지젤'>지젤</option>
          </select>
        </ScInputGroup>
        <Button>팬레터 등록</Button>
      </ScForm>
    </ScFormGroup>
  );
};

export default AddFanLetter;
