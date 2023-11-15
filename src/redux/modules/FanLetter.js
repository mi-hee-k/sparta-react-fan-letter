import FakeData from '../../FakeData.json';

const initialState = FakeData;

const FanLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default FanLetterReducer;
