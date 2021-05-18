import { createStore } from 'redux';
import entities from './reducers/entity.reducer';
import { combineReducers } from 'redux';
import { AppState } from './types';

export default createStore(
    combineReducers<AppState>({
        entities,
    })
)