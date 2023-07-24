import { useSelector } from "react-redux";

function App() {
  const counter = useSelector(state=>state.counter)
  return (
    <>
      {counter}
    </>
  );
}

export default App;
