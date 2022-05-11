import { useState, useEffect } from "react";

export const useScoreHistory = () => {
  const [score, setScore] = useState<number>(0);

  // Retrieve any stored high score.
  useEffect(() => {
    const retrievedHighScore: string | null = localStorage.getItem("highScore");
    if (retrievedHighScore) {
      setScore(Number.parseInt(retrievedHighScore));
    }
  }, []);

  // Update stored highScore if current score is greater than that.
  useEffect(() => {
    const retrievedHighScore: string | null = localStorage.getItem("highScore");
    if (retrievedHighScore) {
      if (Number.parseInt(retrievedHighScore) > score) {
        // Update stored highScore
        localStorage.setItem("highScore", `${score}`);
      }
    }
  }, [score]);

  return [score, setScore];
};
