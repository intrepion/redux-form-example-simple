import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

module.exports = combineReducers({
  form: formReducer,
});

