import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, time}) {
  const timerRef = useRef();
  const dailogRef = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);

  function handleStart() {
    timerRef.current = setTimeout(() => {
      setTimerCompleted(true);
      dailogRef.current.open();
    }, time * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    setTimerStarted(false);
    setTimerCompleted(true);
    clearTimeout(timerRef.current);
  }

  return (
    <>
    <ResultModal ref={dailogRef} result={timerStarted ? 'lose' : 'win'}/>
    <section className="challenge">
      <h2>{title}</h2>
      {timerCompleted && <p>Time's up!</p>}
      <p className="challenge-time">{time} second{time > 0 ? 's' : ''}</p>
      <button onClick={timerCompleted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'}</button>
      {<p className={timerStarted ? 'active' : undefined}>{timerStarted ? 'Time remaining' : 'Time elapsed'}</p>}
    </section>
    </>
  );
}