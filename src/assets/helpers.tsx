import { Country } from "../model";

// Given a array of countries - will return a random non-repeating subset.
export const randomCountries: (
  amount: number,
  countries: Country[]
) => Country[] = (amount: number, countries: Country[]) => {
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
