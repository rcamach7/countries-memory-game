import React from "react";
import { CountryCard } from "./CountryCard";
import { Country } from "../model";

interface Props {
  handleCountryClick: (id: string) => void;
  countries: Country[];
}

export const CardsContainer: React.FC<Props> = ({
  handleCountryClick,
  countries,
}) => {
  return (
    <div className="CardsContainer">
      {countries.map((country) => {
        return <CountryCard key={country.id} country={country} />;
      })}
    </div>
  );
};
