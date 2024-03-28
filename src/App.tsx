import { useRef } from "react";
import { MatchTimer } from "./lib/MatchTimer";
import { ScoreTracker } from "./lib/ScoreTracker";
import { Teams } from "./lib/TeamsInfo";
import "./App.css";
import AdminInputComponent from "./components/AdminInputComponent";
import UserComponent from "./components/UserComponent";

function App() {
  const { matchTime, startMatch } = MatchTimer();
  const { makeScore, score, setResult } = ScoreTracker();

  console.log(score);
  const playerNameRef = useRef<HTMLInputElement>(null);
  const teamNameRef = useRef<HTMLSelectElement>(null);

  const addGoal = () => {
    const playerNameVal = playerNameRef.current?.value;
    const teamName = teamNameRef.current?.value;
    const teamType =
      teamNameRef.current?.options[
        teamNameRef.current?.selectedIndex
      ].getAttribute("data-teamtype");

    if (playerNameVal && teamName && teamType) {
      const playerName =
        playerNameVal?.charAt(0).toUpperCase() +
        playerNameVal?.slice(1).toLowerCase();
      makeScore(teamName, teamType, playerName, matchTime);
      playerNameRef.current.value = "";
    }
  };

  return (
    <div className="app">
      <AdminInputComponent title="Admin" timer={matchTime} result={setResult()}>
        <>
          <button onClick={startMatch}>start</button>
          <hr />
          <div className="input-wrapper">
            <label>Goal</label>
            <select ref={teamNameRef}>
              <option value={Teams.HajdukSplit.teamName} data-teamtype="home">
                {Teams.HajdukSplit.teamName}
              </option>
              <option value={Teams.PSG.teamName} data-teamtype="away">
                {Teams.PSG.teamName}
              </option>
            </select>
            <input type="text" ref={playerNameRef} />
            <button onClick={addGoal}>publish</button>
          </div>
        </>
      </AdminInputComponent>
      <UserComponent
        title="User"
        timer={matchTime}
        result={setResult()}
        matchScore={score}
      />
    </div>
  );
}

export default App;
