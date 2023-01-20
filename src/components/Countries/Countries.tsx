import React from "react";
import CountryCard from "./CountryCard";
import { getCountries } from "@/scripts/fetchData";

const Countries = () => {
  const [countries, setCountries] = React.useState<Country[]>();

  React.useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  return (
    <>
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
