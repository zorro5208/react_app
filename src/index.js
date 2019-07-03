import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'weui'
import 'antd-mobile/dist/antd-mobile.css';
import { HashRouter as Router, Route, Switch ,Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './stores/store'
// 路由组件
import Home from './pages/Home.js';
import Video from './pages/Video/Video.js';
import Picture from './pages/Picture/Picture.js';
import DuanZi from './pages/DuanZi/DuanZi.js';
import Detail from './pages/Detail/Detail.js';
import Search from './components/Search/Search.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import My from './components/My/My.js';
import Gz from './components/Gz/Gz.js';

import New from './pages/New/New.js';


ReactDOM.render(
    <Provider store={store}>
        <Router>
                {/* 栏目的路由 */}
            <Switch>
                <Redirect exact from='/' to='/home'/>
                <Route exact path="/home" component={Home} />
                <Route exact path="/video" component={Video} />
                <Route exact path="/picture" component={Picture} />
                <Route exact path="/duanZi" component={DuanZi} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/new" component={New} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/my" component={My} />
                <Route exact path="/gz" component={Gz} />

            </Switch>
               
        </Router>

    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
