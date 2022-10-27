import React, {useState, useEffect} from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(1500);
    const [isActive, setIsActive] = useState(false);

    function toggle(){
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

  return (
    <div>
        <h1>Timer</h1>
    </div>
  );
}
