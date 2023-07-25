import {combineReducers} from 'redux'
import {countReducer} from './counterReducer'

export const rootReducer = combineReducers({
    counter : countReducer
})
// STORE={
//     rootreducer ={
//         r1 : reducer1=state1=100
//         counter : reducer2=state2=300
//         r3 : reducer3=state3=400
//         r4 : reducer4=state4=500
//     }
// }

let data = {
    name:"Myname",
    age:127
}
console.log(data.name)

//useSelector
