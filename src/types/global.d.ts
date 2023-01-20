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
