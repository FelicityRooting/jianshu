import React from 'react';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Detail extends React.PureComponent {

    componentDidMount() {
        // this.props.match.params.id里面装着每一页的id
        this.props.getDetail(this.props.match.params.id);
    }
    
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                {/* dangerouslySetInnerHTML用来让React正常显示你的html代码 */}
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
            </DetailWrapper>
        )
    }
}

//与store进行连接
const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatchTo = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})
//withRouter的作用是让Detail有能力获得router里所有的数据内容，不用这个上面的this.props.match.params.id会报错
export default connect(mapStateToProps, mapDispatchTo)(withRouter(Detail));