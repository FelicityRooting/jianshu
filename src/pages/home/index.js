import React from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
// import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Home extends React.PureComponent {

    componentDidMount() {
        //等页面基本的图片什么的挂载（mount完毕）,开始和服务器请求数据
        this.props.changeHomeData();
        //控制回到顶部是否显示,定义一个监听事件
        this.bindEvent();
    }

    componentWillUnmount() {
        //销毁回到顶部的组件的事件绑定
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    // shouldComponentUpdate() {
    //     //优化用connect与store相连接的部分
    //     //判断当store里的变化与这个组件有关的时候，我才执行这里的render函数，否则不执行
    //     //避免虚拟DOM的diff执行造成的浪费
    // }

    bindEvent() {
        //添加监听的逻辑
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    //回到顶部的的逻辑
    handleScrollTop = () => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                    src="//upload.jianshu.io/admin_banners/web_images/4564/563e90e1ea09698e8a9ad1a9c4fb36bcea2655be.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
                    alt="540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        // document.documentElement.scrollTop可用来获取当前页面滚动条纵坐标的位置
        // console.log(document.documentElement.scrollTop);
        let linenumber = document.documentElement.scrollTop;
        if (linenumber >= 200) {
            const action = actionCreators.changeScrollStatus(true);
            dispatch(action);
        } else {
            const action = actionCreators.changeScrollStatus(false);
            dispatch(action);
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);