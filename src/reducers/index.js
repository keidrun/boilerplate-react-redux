import { combineReducers } from 'redux';
import musics from './musics_reducer';

const rootReducer = combineReducers({
  musics
});

export default rootReducer;
