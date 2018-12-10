import React from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { Redirect } from "react-router-dom";
import { actionCreators } from './store';

class Login extends React.PureComponent {    
    render() {
        const { login, loginStatus } = this.props;
        //如果没有登录，那么返回的就是登录的页面
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="手机号或邮箱" ref={(input) => {this.account = input}}/>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
                        <Button onClick={() => login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/"/>
        }
        
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchTo = (dispatch) => ({
    login(accountElem, passwordElem) {
        // console.log(accountElem.value, passwordElem.value);
        // console.log(accountElem, passwordElem);
        dispatch(actionCreators.Login(accountElem.value, passwordElem.value));
    }
})

export default connect(mapState, mapDispatchTo)(Login);