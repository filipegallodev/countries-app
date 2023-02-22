import React from "react";
import CountryCard from "./CountryCard";
import { getCountries } from "@/scripts/fetchData";
import styled from "styled-components";

const maxShow = 4;
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
      return handleCountriesToShow(data);
    }
    fetchData();
  }, [maxShowCountries, handleCountriesToShow]);

  return (
    <SectionContainer>
      {countries && (
        <CardList>
          {countries.map((country) => (
            <CountryCard key={country.name.official} country={country} />
          ))}
        </CardList>
      )}
      <LoadMore onClick={() => setMaxShowCountries(maxShowCountries + maxShow)}>
        More {maxShow} countries
      </LoadMore>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardList = styled.ul`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
`;

const LoadMore = styled.button`
  margin: 64px;
  font-size: 1.35rem;
  padding: 16px;
  background-color: #afa;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #5f5;
  }
`;

export default Countries;
