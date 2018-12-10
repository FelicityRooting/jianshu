import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const Login = (account, password) => {
    return (dispatch) => {
        axios.get("https://easy-mock.com/mock/5bea007b12ea3f1cbb0fd9e7/jianshu/api/login?account=" 
        + account + "&password=" + password)
        .then((response) => {
            const result = response.data.data;
            if (result) {
                dispatch(changeLogin(result.account, result.password));
                alert("登陆成功")
            } else {
                alert("登录失败")
            }
        }).catch((error) => {
            console.log(error);
        })
    }
}
