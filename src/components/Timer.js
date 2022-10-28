import React, {useState, useEffect} from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(30);
    const [isActive, setIsActive] = useState(false);
    const [isOnBreak, setIsOnBreak] = useState(false);

    function toggle(){
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);

        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        } 
        return () => clearInterval(interval);
      }, [isActive, seconds]);

  return (
    <div>
        <h1>{isOnBreak ? 'Break' : 'Work'}</h1>
        <h2>{seconds}</h2>
        <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
    </div>
  );
}
