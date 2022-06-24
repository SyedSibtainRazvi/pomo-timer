import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [cycle, setCycle] = useState(0)

  const handleCycle = (e) => {
    e.preventDefault()
  }


  useEffect(() => {
    // let count = setCycle;
    // let cycle = 0;

    // if (count === cycle) {
    //   return console.log("Hello")
    // }
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;
          // setCycle(cycle + 1);
          // console.log(cycle)
          

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
        <input type="number" value={cycle} onChange={handleCycle}/>
    </div>
  );
}

export default Pomodoro;