/**
 * Created by congl on 7/23/2017.
 */

import {
    USER_EMAIL_CHANGED,
    USER_PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
}from '../actions/types'

const INITIAL_STATE = {
    email: '' ,
    password:''
};

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case USER_EMAIL_CHANGED:
            return {...state, email: action.payload};
        case USER_PASSWORD_CHANGED:
            return {...state, password: action.payload};
        default:
            return state;
    }
}
