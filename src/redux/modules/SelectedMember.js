const SELECTED_MEMBER = 'SELECTED_MEMBER';

export const selectedHandler = (payload) => {
  return {
    type: SELECTED_MEMBER,
    payload,
  };
};

const initialState = '전체';

const SelectedMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_MEMBER:
      return action.payload;
    default:
      return state;
  }
};

export default SelectedMemberReducer;
