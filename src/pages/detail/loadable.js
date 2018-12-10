import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
    //需要异步加载的组件名
    loader: () => import('./index.js'),
    //在加载的时候会有一段时间，这段时间，可以用loading干一些事情
    loading() {
        return <div>正在加载</div>
    }
});

export default () => <LoadableComponent/>
