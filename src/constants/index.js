export const API_URL_ALL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,tld,languages,population,flags,currencies,borders';

export const API_URL_NAME = (name) =>
  `https://restcountries.com/v3.1/name/${name}?fields=name,capital,region,subregion,tld,languages,population,flags,currencies,borders`;

export const API_URL_REGION = (region) =>
  `https://restcountries.com/v3.1/region/${region}?fields=name,capital,region,subregion,tld,languages,population,flags,currencies,borders`;

  export const API_URL_CODES = (codes) =>
  `https://restcountries.com/v3.1/alpha/?codes=${codes.join(',')}?fields=name,capital,region,subregion,tld,languages,population,flags,currencies,borders`;