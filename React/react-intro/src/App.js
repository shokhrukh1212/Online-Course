import { useState } from "react";
import { StudentsList } from "./components/StudentsList";
import { NewStudent } from "./components/AddStudent";
import { DateCounter } from "./components/DateCounter";

function App() {
  const [names, setNames] = useState(["Jasur", "Madina", "Shahlo", "Otabek"]);

  /**
   * Example function
   */

  // function handleClick() {
  //   setNumber((number) => number + 1);
  //   setNumber((number) => number + 1);
  //   setNumber((number) => number + 1);
  // }

  return (
    <div className="App">
      <StudentsList classname="9-'B'" names={names} />

      <NewStudent setNames={setNames} />
      <br />
      <br />
      <DateCounter />
    </div>
  );
}

export default App;
