import React, { useEffect, useState } from 'react';

function customHook() {
  const [seconds, setSeconds] = useState(0);
  const [clear, setClear] = useState(false);
  useEffect(() => {

    const tick = () => {
      setSeconds(sec => sec + 1);
    }

    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, [clear]);

  const reset = () => {
    setSeconds(0);
    setClear(c => !c);
  }
  return [seconds,reset];
}

function CustomTimer() {
  const [count, reset] = customHook();
  return (
    <div>
      Seconds: {count}
      <br />
      <button onClick={reset}>Reset to 0</button>
    </div>
  );
}

export default CustomTimer;