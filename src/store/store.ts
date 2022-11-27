import { compose, legacy_createStore as createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);
