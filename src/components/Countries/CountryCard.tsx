import React from "react";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <li>
      <div>
        <h3>{country.name.common}</h3>
      </div>
    </li>
  );
};

export default CountryCard;
