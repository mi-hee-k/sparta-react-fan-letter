import FakeData from '../../FakeData.json';

const ADD_FANLETTER = 'fanLetter/ADD_FANLETTER';
const EDIT_FANLETTER = 'fanLetter/EDIT_FANLETTER';
const DELETE_FANLETTER = 'fanLetter/DELETE_FANLETTER';

const initialState = FakeData;

export const addHandler = (payload) => {
  return {
    type: ADD_FANLETTER,
    payload,
  };
};

export const editHandler = (payload) => {
  return {
    type: EDIT_FANLETTER,
    payload,
  };
};

export const deleteHandler = (payload) => {
  return {
    type: DELETE_FANLETTER,
    payload,
  };
};

const FanLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FANLETTER:
      return [action.payload, ...state];

    case EDIT_FANLETTER:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.editInput }
          : item
      );

    case DELETE_FANLETTER:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default FanLetterReducer;
