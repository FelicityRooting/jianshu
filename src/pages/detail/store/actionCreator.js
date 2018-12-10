import axios from 'axios';
import * as constants from "./constants";

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get("https://easy-mock.com/mock/5bea007b12ea3f1cbb0fd9e7/jianshu/api/detail?id=" + id)
        .then((response) => {
            const result = response.data.data;
            dispatch(changeDetail(result.title, result.content));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}