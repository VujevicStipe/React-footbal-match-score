import "./MatchScoreComponent.css";
import { TeamData } from "../../lib/TeamsInfo";

export interface Score {
  team: string;
  player: string;
  minute: number;
}
interface MatchScoreComponentProps {
  team1: TeamData;
  team2: TeamData;
  timer: number;
  result: any;
}

const MatchScoreComponent: React.FC<MatchScoreComponentProps> = ({
  team1,
  team2,
  timer,
  result,
}) => {
  return (
    <div className="match-score-component">
      <div className="team1">
        <img src={team1.teamBadgeUrl} alt="" />
        <h2>{team1.teamName}</h2>
      </div>
      <div className="score">
        <h3>{result}</h3>
        <h4>{timer}</h4>
      </div>
      <div className="team2">
        <img src={team2.teamBadgeUrl} alt="" />
        <h2>{team2.teamName}</h2>
      </div>
    </div>
  );
};

export default MatchScoreComponent;
