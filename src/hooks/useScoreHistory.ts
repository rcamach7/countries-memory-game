import { useState, useEffect } from "react";

export const useScoreHistory = () => {
  const [highScore, setHighScore] = useState<string | null>(
    localStorage.getItem("highScore")
  );
  const [score, setScore] = useState<number>(0);

  // Retrieve any stored high score.
  useEffect(() => {
    if (highScore) {
      setScore(Number.parseInt(highScore));
    } else {
      localStorage.setItem("highScore", "0");
    }
  }, [highScore]);

  // Update stored highScore if current score is greater than that.
  useEffect(() => {
    if (highScore) {
      if (score > Number.parseInt(highScore)) {
        // Update stored highScore
        localStorage.setItem("highScore", `${score}`);
        setHighScore(`${score}`);
      }
    }
  }, [highScore, score]);

  return [highScore, score, setScore] as const;
};
