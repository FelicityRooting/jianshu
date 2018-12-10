//使用immutable来保证state不会直接被改
//使用fromJS来把js对象转换成immutable对象
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

//封装CHANGE_HOME_DATA的方法
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}

//封装ADD_HOME_DATA的方法
const addHomeList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
    // state.set('articleList', state.get('articleList').concat(action.list))
}

export default (state = defaultState, action) => {
    //用switch对大量的if语句做优化
    switch(action.type) {
        case constants.CHANGE_HOME_DATA :
            return changeHomeData(state, action);
        case constants.ADD_HOME_LIST : 
            return addHomeList(state, action);
        case constants.CHANGE_SCROLL_STATUS : 
            return state.set('showScroll', action.showScroll);
        default:
            return state;
    }
}