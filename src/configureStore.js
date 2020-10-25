import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}, history) {
    let composeEnhancers = compose;
    const reduxSagaMonitorOptions = {};

    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    // Saga Middleware
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    const middlewares = [sagaMiddleware];

    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        rootReducer(),
        initialState,
        composeEnhancers(...enhancers),
    )

    sagaMiddleware.run(rootSaga);

    return store;
}



