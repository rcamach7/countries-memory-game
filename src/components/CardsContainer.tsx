import React from "react";
import { CountryCard } from "./CountryCard";
import { Country } from "../model";

interface Props {
  handleCountryClick: (id: string) => void;
  activeCountries: Country[];
}

export const CardsContainer: React.FC<Props> = ({
  handleCountryClick,
  activeCountries,
}) => {
  return (
    <div className="CardsContainer">
      {activeCountries.map((country) => {
        return <CountryCard key={country.id} country={country} />;
      })}
    </div>
  );
};
