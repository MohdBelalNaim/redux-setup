import {useSelector,useDispatch} from "react-redux";
import {increase,decrease} from './redux/counterActions'
function App() {
  const counter = useSelector(rootreducer=>rootreducer.counter)
  const dispatch = useDispatch()

  function inc(){
   dispatch(increase())
  }
  function dec(){
    dispatch(decrease())
  }
  return (
    <>

    <button onClick={()=>inc()}>+</button>  {counter}  <button onClick={()=>dec()}>-</button>  
    <button onClick={()=>dec()}>RESET</button>
    
    </>
  );
}

export default App;
