//使用immutable来保证state不会直接被改
//使用fromJS来把js对象转换成immutable对象
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
})

export default (state = defaultState, action) => {
    //用switch对大量的if语句做优化
    switch(action.type) {
        case constants.CHANGE_DETAIL :
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}