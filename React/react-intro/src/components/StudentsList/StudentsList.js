import "../../styles/StudentsList.css";

function StudentsList({ classname, names }) {
  return (
    <div>
      <h1 style={{ color: "black", backgroundColor: "red", fontSize: "50px" }}>
        {classname + " sinf o'quvchilari ismlari"}
      </h1>

      <h2>{`Bu sinfda ${names.length} ta o'quvchi bor`}</h2>
      <ul>
        {names.map((name, index) => {
          return (
            <li key={index} className="name">
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { StudentsList };
