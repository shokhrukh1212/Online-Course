import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "ADD60":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    case "DOUBLE":
      return state * 2;
    case "RESET":
      return 10;
  }
}

function ReducerExample() {
  const [count, dispatch] = useReducer(reducer, 10);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DOUBLE" })}>2x</button>
      <button onClick={() => dispatch({ type: "ADD60", payload: 60 })}>
        plus 60
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default ReducerExample;
