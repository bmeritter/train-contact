import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './app/reducers';
import AppRouter from './app/AppRouter';
import logMiddleware from './app/middleware/log-middleware';

const store = createStore(
    rootReducer,
    applyMiddleware(logMiddleware)
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}
