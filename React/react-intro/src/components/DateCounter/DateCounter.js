import { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <button onClick={() => setStep(step - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => setStep(step + 1)}>+</button>

      <br />
      <br />

      <button onClick={() => setCount(count - step)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(step + count)}>+</button>

      <h1>
        {count > 0
          ? `Bugundan keyingi ${count} kun - ${date.toDateString()} `
          : count === 0
          ? `Bugun - ${date.toDateString()}`
          : `Bugundan oldingi ${Math.abs(count)} kun - ${date.toDateString()}`}
      </h1>
    </>
  );
}

export { DateCounter };
