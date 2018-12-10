import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, Remenzhuanti } from '../style';

class Topic extends React.PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' 
                                src={item.get('imgUrl')}
                                alt="64"/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                <Remenzhuanti>更多热门专题（一个icon）</Remenzhuanti>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('topicList')
});

export default connect(mapStateToProps, null)(Topic);