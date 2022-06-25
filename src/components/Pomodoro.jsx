import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [cycle, setCycle] = useState(0.5);
  const [value, setValue] = useState('');


  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (minutes === 0 && seconds === 0) {
        setCycle(cycle + 0.5)
        console.log(cycle)
      }

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(9);
          setMinutes(minutes - 1);

        } else {
          let minutes = displayMessage ? 1 : 1;
          let seconds = 9;
          // console.log(cycle);
          // console.log(value);

          if (value.includes(cycle)) {
            return function cleanup() {
              clearInterval(interval)
            }
          }

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);

        }
      } else {
        setSeconds(seconds - 1);

      }
    }, 1000);
  }, [seconds]);

  const handleReset = () => {
    window.location.reload()
  }

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <>
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      
      <div className="container">
        <button onClick={handleReset}>RESET</button>
        <input className="input-cycle"
          value={value}
          placeholder = "Enter cycle value"
          pattern="[0-9]"
          onChange={(e) =>
            setValue((v) => (e.target.validity.valid ? e.target.value : v))
          } />
      </div>
    </div>
    </>
    
  );
}

export default Pomodoro;