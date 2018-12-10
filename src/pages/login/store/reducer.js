import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    //用switch对大量的if语句做优化
    switch(action.type) {
        case constants.CHANGE_LOGIN :
            return state.set('login', action.value);
        case constants.LOGOUT : 
            return state.set('login', action.value);
        default:
            return state;
    }
}