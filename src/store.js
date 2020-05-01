import {createStore} from 'redux';
import profileReducer from './reducers/ProfileReducer';

const store = createStore(profileReducer);

export default store;