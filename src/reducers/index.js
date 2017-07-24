/**
 * Created by congl on 7/23/2017.
 */
import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
    user: UserReducers,
    //More reducers if there are
    // can go here
});
