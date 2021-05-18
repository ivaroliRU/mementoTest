export type Entity = {
    Title: string;
    Subtitle: string;
    id: string;
}

export type EntityListState = Entity[];

export type AppState = {
    entities: EntityListState
}