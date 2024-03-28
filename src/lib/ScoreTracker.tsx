"use client";

import { useEffect, useState } from "react";

export interface Score {
  team: string;
  player: string;
  minute: number;
}

export const ScoreTracker = () => {
  const [score, setScore] = useState<Score[]>([]);
  const [team1Goal, setTeam1Goal] = useState(0);
  const [team2Goal, setTeam2Goal] = useState(0);

  const makeScore = (
    team: string,
    teamType: string,
    player: string,
    minute: number
  ) => {
    setScore((prevScore) => [...prevScore, { team, teamType, player, minute }]);
    if (teamType == "home") {
      setTeam1Goal((prevGoal) => prevGoal + 1);
    } else {
      setTeam2Goal((prevGoal) => prevGoal + 1);
    }
  };

  const setResult = () => `${team1Goal} - ${team2Goal}`;

  useEffect(() => {
    if (score.length > 0) {
      console.log(score);
      console.log(typeof score);
    }
  }, [score]);

  return { score, makeScore, setResult };
};
