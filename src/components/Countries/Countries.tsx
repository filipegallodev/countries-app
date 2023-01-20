import React from "react";
import CountryCard from "./CountryCard";
import { getCountries } from "@/scripts/fetchData";

const Countries = () => {
  const [countries, setCountries] = React.useState<Country[]>();
  const [maxShowCountries, setMaxShowCountries] = React.useState(6);
  const [limitReached, setLimitReached] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      handleCountriesToShow(data);
    }
    fetchData();
  }, [maxShowCountries]);

  function handleCountriesToShow(data: Country[]): void {
    if (limitReached) return;

    if (data && data instanceof Array && "name" in data[0]) {
      let counter = 0;
      const countriesToShow = data.filter((country) => {
        if (counter < maxShowCountries) {
          counter++;
          return country;
        }
      });
      if (maxShowCountries > countriesToShow.length) setLimitReached(true);
      setCountries(countriesToShow);
    }
  }

  return (
    <>
      <button onClick={() => setMaxShowCountries(maxShowCountries + 6)}>
        More 10 countries
      </button>
      {countries && (
        <ul>
          {countries.map((country) => (
            <CountryCard key={country.name.official} country={country} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Countries;
