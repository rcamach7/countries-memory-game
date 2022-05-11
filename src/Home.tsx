import React from "react";
import { useScoreHistory } from "./hooks/useScoreHistory";
import "./styles/Home.scss";

export const Home: React.FC = () => {
  const [score, setScore] = useScoreHistory();

  return (
    <div className="Home">
      <header>
        <h1>Memory Game</h1>
      </header>
    </div>
  );
};
