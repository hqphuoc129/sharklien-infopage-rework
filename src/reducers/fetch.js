const fetchReducers = (state=[], action) => {
    switch( action.type){
        case 'SET_DATA': 
            return (state = action.data); 
        default: 
            return state;
    }
}


export default fetchReducers; 