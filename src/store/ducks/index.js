import { combineReducers } from 'redux';

import compatibility from './compatibility';
import user from './user';
import pairs from './pairs';

export default combineReducers({
  compatibility,
  user,
  pairs,
});
