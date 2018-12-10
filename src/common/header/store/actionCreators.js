import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    //这里把普通数据转换成immutable数据，否则在reducer里state.set('list', action.data);时会报错
    data: fromJS(data),
    //用Math取整
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
    // type: 'change_input_status'
    type: constants.SEARCH_FOUCS
});

export const searchBlur = () => ({
    // type: 'leave_input'
    type: constants.SEARCH_BLUR
});


export const getList = () => {
    return (dispatch) => {
        axios.get('https://easy-mock.com/mock/5bea007b12ea3f1cbb0fd9e7/jianshu/api/headerList')
        .then((response)=>{
            const data = response.data.data;
            dispatch(changeList(data));
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const MouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const MouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const ChangePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})