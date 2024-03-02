import User from "./User/User";
import { useContext } from "react";
import MyContext from "../../../context/MyContext";
import Child from "./User/Child/Child";

function Users() {
  const { names } = useContext(MyContext);
  return (
    <>
      <h1>Users:</h1>
      {names.map((name) => (
        <User key={name} name={name} />
      ))}

      <Child />
    </>
  );
}
export default Users;
