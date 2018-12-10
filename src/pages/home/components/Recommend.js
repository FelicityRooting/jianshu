import React from 'react';
import { RecommendItem, RecommendWrapper } from '../style';
import { connect } from 'react-redux';

class Recommend extends React.PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const marStateToProps = (state) => ({
    list: state.get('home').get('recommendList')
})

export default connect(marStateToProps, null)(Recommend);