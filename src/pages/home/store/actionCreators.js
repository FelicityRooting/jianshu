import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    //List和fromJS一样，可以把immutable数组转化成普通数组
    list: fromJS(list),
    nextPage
})

export const changeScrollStatus = (status) => ({
    type: constants.CHANGE_SCROLL_STATUS,
    showScroll: status
})

export const getHomeInfo = () => {
    // console.log("ddd")
    return (dispatch) => {
        //'https://easy-mock.com/mock/5bea007b12ea3f1cbb0fd9e7/jianshu/api/home'
        axios.get('https://easy-mock.com/mock/5bea007b12ea3f1cbb0fd9e7/jianshu/api/home')
        .then((response)=>{
            const result = response.data.data;
            dispatch(changeHomeData(result));
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('https://easy-mock.com/mock/5bea007b12ea3f1cbb0fd9e7/jianshu/api/morelist?page=' + page)
        .then((response)=>{
            const result = response.data.data;
            dispatch(addHomeList(result, page + 1));
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
