const fetchImgReducers = (state=[], action) => {
    switch( action.type){
        case 'SET_DATA_IMG': 
            return (state = action.data); 
        default: 
            return state;
    }
}


export default fetchImgReducers; 