import { Entity } from './types';

export enum ENITY_LIST_ACTION_TYPES {
    ADD_ENTITY='ADD_ENTITY',
    REMOVE_ENTITY='REMOVE_ENTITY'
}

export type AddEntityAction = {
    type: ENITY_LIST_ACTION_TYPES.ADD_ENTITY;
    payload: Entity;
}

export type RemoveEntityAction = {
    type: ENITY_LIST_ACTION_TYPES.REMOVE_ENTITY;
    payload: string;
}

export type EntityAction = AddEntityAction | RemoveEntityAction