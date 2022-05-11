import React from "react";
import { useScoreHistory } from "./hooks/useScoreHistory";
import "./styles/Home.scss";

export const Home: React.FC = () => {
  const [highScore, score, setScore] = useScoreHistory();

  return (
    <div className="Home">
      <header>
        <h1>Memory Game</h1>
      </header>
      <div className="playGround">
        <button onClick={() => setScore(score + 1)}>+</button>
        <button onClick={() => setScore(score - 1)}>-</button>
        {score}
      </div>
    </div>
  );
};
