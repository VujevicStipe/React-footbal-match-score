import { useState, useEffect } from "react";

export const MatchTimer = () => {
  const [matchTime, setMatchTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setMatchTime((prevTime) => {
          if (prevTime >= 90) {
            setIsRunning(false);
            return prevTime;
          }
          return prevTime + 1;
        });
      }, 500);
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [isRunning]);

  const startMatch = () => {
    setIsRunning(true)
  }
  const stopMatch = () => {
    setIsRunning(false)
  }

  return {matchTime, startMatch, stopMatch}
};
