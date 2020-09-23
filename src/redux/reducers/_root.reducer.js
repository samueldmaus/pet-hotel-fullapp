import { combineReducers } from 'redux';
import pets from './pets.reducer';
import owners from './owners.reducer';

const rootReducer = combineReducers({
  pets,
  owners, 
});

export default rootReducer;
