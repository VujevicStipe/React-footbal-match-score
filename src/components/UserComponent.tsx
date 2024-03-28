"use client";

import React from "react";
import "./ContainerComponent.css";
import { Teams } from "../lib/TeamsInfo";
import goalIcon from "../../public/assets/football.svg";
import MatchScoreComponent from "./matchScoreComponent/MatchScoreComponent";

interface scoreItem {
  team: string;
  player: string;
  minute: number;
  teamType?: string;
}

interface UserComponentProps {
  title: string;
  timer: number;
  result: JSX.Element | string | null;
  matchScore: scoreItem[];
}

const UserComponent: React.FC<UserComponentProps> = ({
  title,
  timer,
  result,
  matchScore,
}) => {
  return (
    <div className="container-component">
      <h1>{title}</h1>
      <MatchScoreComponent
        team1={Teams.HajdukSplit}
        team2={Teams.PSG}
        timer={timer}
        result={result}
      />
      <hr />
      <div className="user-display">
        {matchScore && matchScore.length > 0 ? (
          <ul>
            {matchScore.map((item, index) => (
              <li key={index} className={item.teamType}>
                {item.teamType == "home" ? <img src={goalIcon} alt="" /> : ""}
                {item.team} - {item.player} ({item.minute}')
                {item.teamType == "away" ? <img src={goalIcon} alt="" /> : ""}
              </li>
            ))}
          </ul>
        ) : (
          <p>No scores yet</p>
        )}
      </div>
    </div>
  );
};

export default UserComponent;
