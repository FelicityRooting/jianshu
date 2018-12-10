import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 250px;
    margin: 100px auto;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    background: #f1f1f1;
    padding-top: 30px;
`;

export const Input = styled.input`
    display: block;
    width: 250px;
    height: 50px;
    line-height: 30px;
    padding: 0 10px;
    margin: 0 auto;
    color: #777;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
`;

export const Button = styled.div`
    margin: 20px auto;
    width: 240px;
    height: 30px;
    padding: 9px 19px;
    line-height: 30px;
    font-size: 20px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    display: block;
    text-align: center;
    :hover {
        background: #187cb7;
    }
`;