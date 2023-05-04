import * as ActionTypes from './ActionTypes';

export const Favorites = (state = { 
    isLoading: true,
        errMess: null,
        // favorites: null
        favorites:[]
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FAVORITES:
            return {...state, isLoading: false, errMess: null, favorites: action.payload};

        case ActionTypes.FAVORITES_LOADING:
            // return {...state, isLoading: true, errMess: null, favorites: null};
            return {...state, isLoading: true, errMess: null, favorites: []};

        case ActionTypes.FAVORITES_FAILED:
            // return {...state, isLoading: false, errMess: action.payload, favorites: null};
            return {...state, isLoading: false, errMess: action.payload, favorites: []};

        case ActionTypes.ADD_FAVORITE:
            var favorite = action.payload;
            return {...state, favorites: state.favorites.concat(favorite)};

        default:
            return state;
    }
} 