import { EntityListState, AddEntityAction } from '../types';
import { ENITY_LIST_ACTION_TYPES } from '../actions';

var initialState = [];

export default function(state: EntityListState = initialState, action: AddEntityAction) {
    switch (action.type) {
        case ENITY_LIST_ACTION_TYPES.ADD_ENTITY:
            return [...state, action.payload];
        default:
            return state
    }
}