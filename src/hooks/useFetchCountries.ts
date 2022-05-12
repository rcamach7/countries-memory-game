import { useState } from "react";
import { Country } from "../model";
import axios from "axios";
import { v4 } from "uuid";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchArea = async (area: string) => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/region/${area}`
      );

      const countries: Country[] = [];
      for (let i = 0; i < 35; i++) {
        if (data[i] !== undefined) {
          countries.push({
            id: v4(),
            name: data[i].name.common,
            flag: data[i].flags.png,
            capital: data[i].capital[0],
            population: data[i].population,
          });
        }
      }
      setCountries(countries);
    } catch (error) {
      alert(error);
    }
  };

  return [countries, fetchArea] as const;
};
