import { useState } from "react";
import { MyComponent } from "./components/MyComponent";
import { StudentsList } from "./components/StudentsList";

const buttonStyle = {
  padding: "5px 10px",
  borderRadius: "10px",
  fontSize: "18px",
  marginRight: "20px",
};

function App() {
  const [num, setNum] = useState(40);
  return (
    <div className="App">
      <MyComponent />
      <br />
      <StudentsList classname="9-'B'" num={num} />
      <button style={buttonStyle} onClick={() => setNum(num + 1)}>
        O'quvchi qo'shing
      </button>

      <button
        style={buttonStyle}
        onClick={() => {
          if (num > 0) setNum(num - 1);
          else setNum(0);
        }}
      >
        O'quvchi jo'natish
      </button>

      <button style={buttonStyle} onClick={() => setNum(0)}>
        Sinfni bo'shatish
      </button>
    </div>
  );
}

export default App;
