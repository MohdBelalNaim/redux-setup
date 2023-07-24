export const countReducer=(state=100,action)=>{
    
    switch(action.type){
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;
        default:
            return state
    }
    
}

//increment -> INCREASE
//decrement -> DECREASE
//DEFAULT
