const fetchNewReducers = (state=[], action) => {
    switch( action.type){
        case 'SET_DATA_NEW': 
            return (state = action.data); 
        default: 
            return state;
    }
}


export default fetchNewReducers; 