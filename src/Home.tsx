import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { CardsContainer } from "./components/CardsContainer";
import { Country } from "./model";
import { useScoreHistory } from "./hooks/useScoreHistory";
import { useFetchCountries } from "./hooks/useFetchCountries";

export const Home: React.FC = () => {
  const [highScore, score, setScore] = useScoreHistory();
  const [countries] = useFetchCountries();
  // Game State
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
      setClickedCountries([]);
      alert("Oops! Game over!");
    }
  };

  const randomCountries: (amount: number) => Country[] = (amount: number) => {
    const randomCountries: Country[] = [];
    // Will select "amount" of random countries from collection.
    for (let i = 0; i < amount; i++) {
      let randomIndex: number = Math.floor(Math.random() * countries.length);
      // Make sure the random index isn't a country previously added
      while (randomCountries.indexOf(countries[randomIndex]) > -1) {
        randomIndex = Math.floor(Math.random() * countries.length);
      }
      randomCountries.push(countries[randomIndex]);
    }
    return randomCountries;
  };

  useEffect(() => {
    setActiveCountries(randomCountries(8));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        countries={countries}
        handleCountryClick={handleCountryClick}
      />
    </div>
  );
};
