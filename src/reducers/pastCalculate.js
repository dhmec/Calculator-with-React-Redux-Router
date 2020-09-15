

const pastCalculateReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'PAST_CALCULATE':
            const detailedResult = {
                task:action.payload
            };
            const newPastList = [...state];
            newPastList.push( detailedResult );
            return newPastList;

        default:
            return state;

    }
}

export default pastCalculateReducer;