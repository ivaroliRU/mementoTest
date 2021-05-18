var initialState = [
    {
        Title: "Test",
        Subtitle: "Test test"
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_Entity':
            return [...state, action.payload];
        case 'COPY_RANDOM':
            let randomEntity = state[Math.floor(Math.random()*state.length)];
            return [...state, randomEntity]
        default:
            return state
    }
}