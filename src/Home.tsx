import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { randomCountries } from "./assets/helpers";
import { CardsContainer } from "./components/CardsContainer";
import { Country } from "./model";
import { useScoreHistory } from "./hooks/useScoreHistory";
import { useFetchCountries } from "./hooks/useFetchCountries";
import { GameStart } from "./components/GameStart";

export const Home: React.FC = () => {
  // Initial / Restart game screen.
  const [startGame, setStartGame] = React.useState<boolean>(true);

  // Game information
  const [highScore, score, setScore] = useScoreHistory();
  const [countries] = useFetchCountries();

  // Game state
  const [activeCountries, setActiveCountries] = useState<Country[]>([]);
  const [clickedCountries, setClickedCountries] = useState<string[]>([]);

  const handleCountryClick = (id: string) => {
    const indexOfClicked: number = clickedCountries.indexOf(id);
    // If country clicked ID doesn't exists in current collection - that means it's new and we can store it as clicked and increase score.
    if (indexOfClicked === -1) {
      setClickedCountries([...clickedCountries, id]);
      setScore(score + 1);
    } else {
      // Country has been clicked before - so user loses the game.
      setScore(0);
      setStartGame(true);
      setClickedCountries([]);
    }
  };

  useEffect(() => {
    if (countries.length) {
      setActiveCountries(randomCountries(8, countries));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, score]);

  return (
    <div className="Home">
      <header>
        <h1>Memory Game</h1>
      </header>
      <div className="gameStatusBar">
        <Chip
          className="chip"
          icon={<EmojiEventsIcon className="trophy" />}
          label={`High Score: ${highScore}`}
        />
        <Chip
          className="chip"
          icon={<SportsScoreIcon className="flag" />}
          label={`Current Score: ${score}`}
        />
      </div>

      <CardsContainer
        activeCountries={activeCountries}
        handleCountryClick={handleCountryClick}
      />

      {startGame ? <GameStart setStartGame={setStartGame} /> : null}
    </div>
  );
};
