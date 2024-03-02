import { useState } from "react";
// import { StudentsList } from "./components/StudentsList";
// import { NewStudent } from "./components/AddStudent";
// import { DateCounter } from "./components/DateCounter";
// import { MoviesList } from "./components/MoviesList";
// import ReducerExample from "./components/ReducerExample/ReducerExample";
// import RefExample from "./components/useRefExample";
import { ContextApi } from "./components/ContextApi";
import MyContext from "./context/MyContext";

function App() {
  const [names, setNames] = useState(["Jasur", "Madina", "Shahlo", "Otabek"]);
  const [childState, setChildState] = useState("Bu Child Uchun");

  /**
   * Example function
   */

  // function handleClick() {
  //   setNumber((number) => number + 1);
  //   setNumber((number) => number + 1);
  //   setNumber((number) => number + 1);
  // }

  return (
    <MyContext.Provider value={{ names, childState, setChildState }}>
      <div className="App">
        {/* <StudentsList classname="9-'B'" names={names} />

      <NewStudent setNames={setNames} />
      <br />
      <br />
      <DateCounter /> */}
        {/* <MoviesList /> */}
        {/* <ReducerExample /> */}
        {/* <RefExample /> */}
        <ContextApi />
      </div>
    </MyContext.Provider>
  );
}

export default App;
