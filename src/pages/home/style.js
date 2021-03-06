import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 6px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        margin-right: 10px;
        width: 32px;
        height: 32px;
    }
`;

export const Remenzhuanti = styled.span`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    background: #f7f7f7;
    color: #000;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper  = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 290px;
    height: 50px;
    background-size: contain;
    margin-top: 5px;
    background: url(${(props) => props.imgUrl})
`;

export const WitterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    line-height: 40px;
    height: 40px;
    margin: 30px 0;
    text-align: center;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`;