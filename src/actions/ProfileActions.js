import * as actions from './ActionTypes';
import axios from 'axios';

export const loadProfiles = () => {
    return {
        type: actions.LOAD_PROFILES
    }
}
export const loadError = message => {
    return {
        type: actions.LOAD_ERROR,
        payload: message
    }
}
export const getProfiles = users => {
    return {
        type: actions.GET_PROFILES,
        payload: users
    }
}
export const addProfile = profile => {
    return {
        type: actions.ADD_PROFILE,
        payload: profile
    }
}

export const fetchUserProfiles = () => {
    return (dispatch) => {
        dispatch(loadProfiles)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result => {
                const userProfiles = result.data
                dispatch(getProfiles(userProfiles))
            })
            .catch(error => {
                dispatch(loadError(error.message))
            })
    }
}