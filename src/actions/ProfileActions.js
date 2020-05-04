import * as actions from './ActionTypes';

export const loadProfiles = () => {
    return {
        type: actions.LOAD_PROFILES
    }
}
export const getProfiles = () => {
    return {
        type: actions.GET_PROFILES
    }
}
export const addProfile = profile => {
    return {
        type: actions.ADD_PROFILE,
        payload: profile
    }
}