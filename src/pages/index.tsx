import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import { getCountries } from "@/scripts/fetchData";

interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  languages: string[];
  population: number;
  continents: string[];
  region: string;
  subregion: string;
  flags: {
    png: string;
    svg: string;
  };
}

export default function Home() {
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
      <Head>
        <title>Countries App</title>
        <meta
          name="description"
          content="Info about countries around the world here!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {countries && (
          <div>
            <ul>
              {countries.map((country) => (
                <li key={country.name.official}>
                  <div>
                    <h3>{country.name.common}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </>
  );
}
