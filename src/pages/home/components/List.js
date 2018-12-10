import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';
import { Link } from 'react-router-dom';

class List extends React.PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            //添加Link标签使得实现跳转到detail页面，而且不像使用a标签那样要重新
                            //加载整个页面，就实现了SPA
                            <Link key={index} to={"/detail/" + item.get('id')}>
                            {/* 还有一种获取id的方式 */}
                            {/* <Link key={index} to={"/detail?id=" + item.get('id')}> */}
                                <ListItem >
                                    <ListInfo >
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('description')}</p>
                                    </ListInfo>
                                    <img className="pic" src={item.get('imgUrl')} alt="120"/>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('articleList'),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatchToState = (dispatch) => ({
    getMoreList (page) {
        const action = actionCreators.getMoreList(page);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToState)(List);