import * as Actions from '../actions/ActionTypes'

const initialState = [
    {
        id: 1,
        name: 'Tom Cruise',
        address: ' Tom Street'
    },
    {
        id: 2,
        name: 'James Bond',
        address: 'Bond Street'
    }]

const reducer = (state = [], action) => {
    switch (action.type) {
        case Actions.GET_PROFILES:
            return [
                ...state
            ]
        case Actions.ADD_PROFILE:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default reducer;