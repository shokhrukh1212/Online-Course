import { useState } from "react";
import "../../styles/StudentsList.css";

function StudentsList({ classname, num }) {
  const [names, setNames] = useState(["Jasur", "Madina", "Shahlo", "Otabek"]);
  // const { classname } = props;
  // const headerStyle = { color: "black", backgroundColor: "red", fontSize: "50px" }

  return (
    <div>
      <h1 style={{ color: "black", backgroundColor: "red", fontSize: "50px" }}>
        {classname + " sinf o'quvchilari ismlari"}
      </h1>

      <h3>{`Bu sinfda ${num} ta o'quvchi bor`}</h3>
      <ul>
        {names.map((name) => {
          return (
            <li key={name} className="name">
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { StudentsList };
