import { useState, useRef, useEffect } from "react";

export default function RefExample() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const countRenders = useRef(0);
  /* input ref */
  const inputRef = useRef(null);

  // Renderlar sonini sanash
  useEffect(() => {
    countRenders.current = countRenders.current + 1;
  }, [startTime, now]);

  // Inputga focus qilish
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Renders: {countRenders.current}</h1>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <hr />

      <input type="text" ref={inputRef} placeholder="Enter some text" />
    </>
  );
}
