"use client";

import React, { ReactNode } from "react";
import './ContainerComponent.css'
import { Teams } from "../lib/TeamsInfo";
import MatchScoreComponent from "./matchScoreComponent/MatchScoreComponent";

interface AdminInputComponentProps {
  title: string;
  timer: number;
  result: JSX.Element | string | null;
  children: ReactNode;
}

const AdminInputComponent: React.FC<AdminInputComponentProps> = ({
  title,
  timer,
  result,
  children,
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
      {children}
    </div>
  );
};

export default AdminInputComponent;
