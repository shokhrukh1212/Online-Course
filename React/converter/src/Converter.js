import { useEffect, useState } from "react";
import useFetchCurrency from "./hooks/fetchCurrency";

function Converter() {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("GBP");
  const [result, setResult] = useState(0);

  useFetchCurrency(value, from, to, setResult);

  return (
    <div>
      <input
        type={"number"}
        placeholder="Summani kiriting"
        style={{ marginBottom: 10 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <label>FROM</label>
      <select
        style={{ marginRight: "50px" }}
        onChange={(e) => setFrom(e.target.value)}
        value={from}
      >
        <option value={"USD"}>USD</option>
        <option value={"JPY"}>JPY</option>
        <option value={"CAD"}>CAD</option>
      </select>

      <label>TO</label>
      <select onChange={(e) => setTo(e.target.value)} value={to}>
        <option value={"GBP"}>GBP</option>
        <option value={"EUR"}>EUR</option>
        <option value={"DKK"}>DKK</option>
      </select>

      {/* Result */}
      <p>
        Result:{" "}
        <span style={{ fontWeight: "bold", color: "red" }}>
          {result.toFixed(3)} {to}
        </span>
      </p>
    </div>
  );
}

export default Converter;
