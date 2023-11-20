import FakeData from '../../FakeData.json';

const ADD_FANLETTER = 'fanLetter/ADD_FANLETTER';
const EDIT_FANLETTER = 'fanLetter/EDIT_FANLETTER';
const DELETE_FANLETTER = 'fanLetter/DELETE_FANLETTER';
const SET_FANLETTER = 'fanLetter/SET_FANLETTER';

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

export const setFanLetters = (payload) => {
  return {
    type: SET_FANLETTER,
    payload,
  };
};

const saveToLocalStorage = (updatedFanLetter) => {
  localStorage.setItem('fanLetters', JSON.stringify(updatedFanLetter));
};

const FanLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FANLETTER:
      const newFanLetterList = [action.payload, ...state];
      saveToLocalStorage(newFanLetterList);
      return newFanLetterList;

    case EDIT_FANLETTER:
      const editedFanLetterList = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.editInput }
          : item
      );
      saveToLocalStorage(editedFanLetterList);
      return editedFanLetterList;

    case DELETE_FANLETTER:
      const deletedFanLetterList = state.filter(
        (item) => item.id !== action.payload
      );
      saveToLocalStorage(deletedFanLetterList);
      return deletedFanLetterList;

    case SET_FANLETTER:
      return action.payload;

    default:
      return state;
  }
};

export default FanLetterReducer;
