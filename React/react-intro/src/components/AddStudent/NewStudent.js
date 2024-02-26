import { useState } from "react";

function NewStudent({ setNames }) {
  const [name, setName] = useState("");

  function handleAddStudent() {
    setNames((names) => [...names, name]);

    setName("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Yangi o'quvchi ismi"
        style={{
          padding: "5px 10px",
          fontSize: 20,
          border: "1px solid #000",
          marginRight: 15,
        }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        type="button"
        onClick={handleAddStudent}
        style={{ padding: "5px 10px", fontSize: 20 }}
        disabled={!name}
      >
        Qo'shish
      </button>
    </>
  );
}

export { NewStudent };
