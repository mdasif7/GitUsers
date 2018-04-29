import * as actionTypes from '../actions/actionTypes';
const initialState={
    users:[],
    totalCount:0,
};


const reducer = (state=initialState,action)=>{
    console.log("##",state,action)
    switch(action.type){
        case actionTypes.ONGITUSERS:
            return {...state,users:[...state.users,...action.payload.items],totalCount:action.payload.totalCount};
        default: return state;

    }
}
export default reducer;