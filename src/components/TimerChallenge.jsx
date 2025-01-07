import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [started, setStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  let timer;

  function handleStart() {
    timer = setStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {started ? "Stop" : "Start"}Challenge
        </button>
      </p>
      <p className={started ? "active" : undefined}>
        {started ? "Time is running..." : "Timer Inactive"}
      </p>
    </section>
  );
}
