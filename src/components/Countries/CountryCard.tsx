import React from "react";
import styled from "styled-components";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <li>
      <Card>
        <Image src={country.flags.svg} alt={country.name.official} />
        <h3>{country.name.common}</h3>
      </Card>
    </li>
  );
};

const Card = styled.div`
  width: 320px;
  text-align: center;
  border: 1px solid #777;
  border-radius: 16px;
  padding: 16px;
`;

const Image = styled.img`
  height: 100px;
  width: auto;
  margin-bottom: 16px;
`;

export default CountryCard;
