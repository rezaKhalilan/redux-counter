import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="header">Redux Counter</h3>
      <div className="App">
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
        <h1>Counter - {count}</h1>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
