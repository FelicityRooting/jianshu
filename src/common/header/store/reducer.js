import * as constants from './constants';
//使用immutable来保证state不会直接被改
//使用fromJS来把js对象转换成immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    //用来做鼠标移出搜索框信息的区块时的动作
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    //用switch对大量的if语句做优化
    switch(action.type) {
        case constants.SEARCH_FOUCS :
            return state.set('focused', true);
        case constants.SEARCH_BLUR :
            return state.set('focused', false);
        case constants.CHANGE_LIST :
            return state.merge({
                'list': action.data,
                'totalPage': action.totalPage
            })
            // return state.set('list', action.data)
            // .set('totalPage', action.totalPage);
        case constants.MOUSE_ENTER :
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE :
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE :
            return state.set('page', action.page)
        default:
            return state;
    }
    // if (action.type === constants.SEARCH_FOUCS) {
    //     //immutable对象的set方法，会结合之前immutable对象的值和设置的值来返回一个全新的对象，所以
    //     //并不是对旧的对象进行了修改
    //     return state.set('focused', true);
    //     // {focused: true}
    // }
    // if (action.type === constants.SEARCH_BLUR) {
    //     return state.set('focused', false);
    //     // {focused: false}
    // }
    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list', action.data);
    // }
    // return state;
}