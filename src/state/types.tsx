import { ENITY_LIST_ACTION_TYPES } from './actions';

export type Entity = {
    Title: string;
    Subtitle: string;
}

export type EntityListState = Entity[];

export type AppState = {
    entities: EntityListState
}

export type AddEntityAction = {
    type: ENITY_LIST_ACTION_TYPES.ADD_ENTITY;
    payload: Entity;
}