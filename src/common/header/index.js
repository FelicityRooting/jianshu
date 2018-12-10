import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, 
    NavSearch, Addition, Button, SearchWrapper, 
    SearchInfo, SearchInfoTitle, SearchInfoSwitch, 
    SearchInfoList, SearchInfoItem } from './style.js';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store/';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    getListArea = () => {
        const { page, focused, mouseIn, totalPage, 
            handleMouseEnter, handleMouseLeave, 
            handleChangePage} = this.props;
        const pageList = [];
        //immutable有个叫做toJS的方法，可以把immutable数组转换成普通数组
        const newList = this.props.list.toJS();
        if (newList.length) {
            //搜索框显示的页面设置
            for (let i = ((page - 1) * 10); i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {/* {
                            //这里的list仍旧是immutable数组，immutable也提供了map方法
                            this.props.list.map((item, page) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        } */}
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { handleInputBlur, handleInputFocus, focused, list, login, logout, write } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>
                        <i className='iconfont'>&#xe695;</i>
                        首页
                    </NavItem>
                    <NavItem className='left'>
                        <i className='iconfont'>&#xe6db;</i>
                        下载App
                    </NavItem>
                    {
                        login? <NavItem className='right' onClick={logout}>退出</NavItem> 
                        : <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={300}
                            classNames='slide'>
                            <NavSearch onFocus={() => handleInputFocus(list)} 
                            onBlur={handleInputBlur} 
                            className={focused ? 'focused':''}></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused zoom':'iconfont zoom'}>&#xe617;</i>
                        {/* 这里是搜索框跳出信息的部分 */}
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className='writting'><i className="iconfont">&#xe600;</i>写文章</Button>
                    </Link> 
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )    
    }
}
//这里state的初始值来源于src下store文件夹里的reducer
const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        focused: state.get('header').get('focused'),//这里的state已经是个immutable的数据了,所以必须用get方法
        //以下写法也可以：
        // focused: state.getIn(['header', 'focused'])
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.get('header').get('mouseIn'),
        totalPage: state.get('header').get('totalPage'),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //这里list.size === 0表示，已经与服务端获取了数据，不需要再重复获取，避免无意义的请求发送
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            } 
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.MouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.MouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            //第一次点击时，originAngle无值，设置为0，第二次点击，有值了，用正则表达式截取数字部分，转化成10进制正整数
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                //把originAngle转化成10进制数字
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            //以上代码是做换一批时旋转的动画效果
            //总结下就是在style.js里，给spin标签添加了transition属性，使其具备过渡的特性，然后添加
            //transform-origin属性使其有绕着中心转的属性，接着再本文件里，每次用户点击时，只要改变
            //其transform对应的rotate（旋转）的角度即可，初始为0，加上360度，后来第二次再加360，形
            //成了动画效果

            if (page < totalPage) {
                //page小于totalPage，点击一下换一批，page就+1
                dispatch(actionCreators.ChangePage(page + 1));
                console.log(page);
            } else {
                //page等于totalPage，点击就变成page =1 
                dispatch(actionCreators.ChangePage(1));
                console.log(page);
            }
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);