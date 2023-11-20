import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import FanLetterReducer from 'redux/modules/FanLetter';
import SelectedMemberReducer from 'redux/modules/SelectedMember';

const rootReducer = combineReducers({
  FanLetterReducer,
  SelectedMemberReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
