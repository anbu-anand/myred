import {combineReducers} from 'redux';
import postReducer  from "./PostReducer";
import UserReducer from './UserReducer';

export default combineReducers({
   posts: postReducer,
   users: UserReducer
});
