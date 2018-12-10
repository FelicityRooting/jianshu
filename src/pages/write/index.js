import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Write extends React.PureComponent {    
    render() {
        const { loginStatus } = this.props;
        //如果没有登录，那么返回的就是登录的页面
        if (loginStatus) {
            return (
                <div>写文章页面</div>
            )
        } else {
            return <Redirect to="/login"/>
        }
        
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);