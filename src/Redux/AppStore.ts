import {createBrowserHistory} from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducers';
import rootSagas from './rootSagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

let store;

declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

export const configureStore = (initialState:any)=>{
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :compose;

    store = createStore(reducers(history),initialState, compose(applyMiddleware(...middleware),process.env.NODE_ENV === "development" ? reduxDevTools : compose));

    sagaMiddleware.run(rootSagas);

    return store;
}

export default store;