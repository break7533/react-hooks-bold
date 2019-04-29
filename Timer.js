import React, { useEffect, useState } from 'react';


function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const tick = () => {
      setSeconds(sec => sec + 1);
    }

    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Seconds: {seconds}
    </div>
  );
}

export default Timer;