import { useContext, useState } from "react";
import MyContext from "../../../../../context/MyContext";

function Child() {
  const { childState, setChildState } = useContext(MyContext);
  const [firstName, setFirstName] = useState("Mohira");
  const [lastName, setLastName] = useState("Ahmedova");
  // const [fullName, setFullName] = useState(firstName + " " + lastName);
  const fullName = firstName + " " + lastName;
  let fullName2 = "Ism";

  function handleClick() {
    setChildState("Bu Child Uchun O'zgartirildi");
  }
  return (
    <>
      <h1>Eng kichkina children component</h1>
      <p>{childState}</p>
      <p>{fullName}</p>
      <button onClick={handleClick}>O'zgartirish</button>
    </>
  );
}

export default Child;
