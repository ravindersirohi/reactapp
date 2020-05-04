import * as Actions from '../actions/ActionTypes'

const initialState =
{
    UserData: [{
        id: 1,
        name: 'Tome',
        email: 'tome@domain.net'
    }],
    Loading: false,
    Error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOAD_PROFILES:
            return {
                ...state,
                Loading: true
            }
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