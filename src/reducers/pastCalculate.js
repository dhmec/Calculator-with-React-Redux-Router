

const pastCalculateReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'PAST_CALCULATE':
            const newTask = {
                task:action.payload
            };
            const newPastList = [...state];
            newPastList.push( newTask );
            return newPastList;

        default:
            return state;

    }
}

export default pastCalculateReducer;