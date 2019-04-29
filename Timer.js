import React, { useEffect,useState } from 'react';


function Timer() {
  const [seconds, setSeconds] = useState(0);

  const tick = () => {
    useState(seconds + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    clearInterval(interval);
  }, []);

    return (
      <div>
        Seconds: {seconds}
      </div>
    );
  }

export default Timer;