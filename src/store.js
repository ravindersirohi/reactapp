import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import profileReducer from './reducers/ProfileReducer';

const middleware = [thunk, logger]

const store = createStore(
    profileReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;