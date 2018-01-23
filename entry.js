/**
 * Created by lmy on 17-8-10.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import reducer from './public/js/reducers/hi';
import App from './public/js/containers/container';


import middleHi from './public/js/middlewares/middle';

const createMiddlewareStore=applyMiddleware(middleHi)(createStore);

let store = createMiddlewareStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
