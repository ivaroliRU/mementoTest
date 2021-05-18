import { EntityListState } from '../types';
import { EntityAction } from '../actions';
import { ENITY_LIST_ACTION_TYPES } from '../actions';

var initialState = [];

export default function(state: EntityListState = initialState, action: EntityAction) {
    switch (action.type) {
        case ENITY_LIST_ACTION_TYPES.ADD_ENTITY:
            return [...state, action.payload];
        case ENITY_LIST_ACTION_TYPES.REMOVE_ENTITY:
            let id = action.payload;
            let newState = []

            for(let i = 0; i < state.length; i++){
                if(state[i].id !== id){
                    newState.push(state[i])
                }
            }

            return newState;
        default:
            return state;
    }
}