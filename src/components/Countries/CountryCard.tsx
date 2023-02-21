import React from "react";
import styled from "styled-components";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <li>
      <Card>
        <Image src={country.flags.svg} alt={country.name.official} />
        <div>
          <Name>{country.name.common}</Name>
          <Region>{country.region}</Region>
        </div>
        <div>
          <Population>
            Population: {country.population.toLocaleString()}
          </Population>
        </div>
      </Card>
    </li>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 320px;
  height: 320px;
  text-align: center;
  border: 2px solid #afa;
  border-radius: 16px;
  padding: 16px;
  background-color: #eee;
`;

const Image = styled.img`
  height: 100px;
  width: auto;
  margin-bottom: 16px;
`;

const Name = styled.h3`
  color: #222;
  font-size: 1.5rem;
`;

const Region = styled.p`
  color: #222;
  font-size: 1.2rem;
`;

const Population = styled.p`
  color: #222;
  font-size: 1.125rem;
`;

export default CountryCard;
