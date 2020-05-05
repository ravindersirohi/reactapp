import { createStore, applyMiddleware } from 'redux';
import profileReducer from './reducers/ProfileReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = [thunk]
const store = createStore(
    profileReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;