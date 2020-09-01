// will have all methods related to navbar

const dataReducer = (state={data:{}},action) => {
    switch(action.type){
        case 'updateData':
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default dataReducer;