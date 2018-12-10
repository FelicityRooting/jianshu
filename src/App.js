import React, { Component } from 'react';
import GlobalStyle from './style.js';
import GlobalStyleFont from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <GlobalStyleFont/>
        <Provider store={store}>
          <div>
            <BrowserRouter>
              <div>
                <Header />
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/detail/:id' exact component={Detail}></Route>
                  {/* 还有一种获取id的方式 */}
                  {/* <Route path='/detail/' exact component={Detail}></Route> */}
                  <Route path='/login' exact component={Login}></Route>
                  <Route path='/write' exact component={Write}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
