import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [cycle, setCycle] = useState(-2)
  const [value, setValue] = useState('')


  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(9);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 0 : 1;
          let seconds = 9;

          setCycle(cycle + 1);
          console.log(cycle);
          console.log(value);

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
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <button onClick={handleReset}>RESET</button>
      <input value={value}
        pattern="[0-9]"
        onChange={(e) =>
          setValue((v) => (e.target.validity.valid ? e.target.value : v))
        } />
    </div>
  );
}

export default Pomodoro;