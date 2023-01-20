import React from "react";
import CountryCard from "./CountryCard";
import { getCountries } from "@/scripts/fetchData";

const maxShow = 6;
const Countries = () => {
  const [countries, setCountries] = React.useState<Country[]>();
  const [maxShowCountries, setMaxShowCountries] = React.useState(maxShow);
  const [limitReached, setLimitReached] = React.useState(false);

  const handleCountriesToShow = React.useCallback(
    (data: Country[]) => {
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
        return setCountries(countriesToShow);
      }
    },
    [maxShowCountries, limitReached]
  );

  React.useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      handleCountriesToShow(data);
    }
    fetchData();
  }, [maxShowCountries, handleCountriesToShow]);

  return (
    <>
      <button onClick={() => setMaxShowCountries(maxShowCountries + maxShow)}>
        More {maxShow} countries
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
